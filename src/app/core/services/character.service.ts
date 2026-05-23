import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Character } from '../models/character.model';
import { RamCharacter, RamResponse } from '../models/rick-and-morty.model';

const API_URL = 'https://rickandmortyapi.com/api/character';
const LOCAL_KEY = 'custom_characters';

function mapRamToCharacter(c: RamCharacter): Character {
  const statusMap: Record<string, Character['status']> = {
    Alive: 'active',
    Dead: 'deceased',
    unknown: 'retired',
  };
  return {
    id: c.id,
    name: c.name,
    description: `${c.species}${c.type ? ' — ' + c.type : ''}. Pochodzi z: ${c.origin.name}.`,
    series: c.location.name,
    status: statusMap[c.status] ?? 'retired',
    power: Math.min(10, Math.ceil(c.episode.length / 5) + 1),
    imageUrl: c.image,
    tags: [c.species.toLowerCase(), c.gender.toLowerCase()].filter(Boolean),
    createdAt: new Date(c.created),
    updatedAt: new Date(c.created),
  };
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private http = inject(HttpClient);

  private getLocalCharacters(): Character[] {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  private saveLocalCharacters(characters: Character[]): void {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(characters));
  }

  isLocal(id: number): boolean {
    return this.getLocalCharacters().some(c => c.id === id);
  }

  getAll(): Observable<Character[]> {
    const pages$ = [1, 2].map((page) =>
      this.http.get<RamResponse>(`${API_URL}?page=${page}`).pipe(
        map((res) => res.results.map(mapRamToCharacter))
      )
    );

    return forkJoin(pages$).pipe(
      map((pages) => {
        const apiChars = pages.flat();
        const localChars = this.getLocalCharacters();
        return [...apiChars, ...localChars];
      }),
      catchError((err) =>
        throwError(() => new Error('Błąd połączenia z API: ' + err.message))
      )
    );
  }

  getById(id: number): Observable<Character> {
    const localChars = this.getLocalCharacters();
    const localFound = localChars.find((c) => c.id === id);
    if (localFound) return of(localFound);

    return this.http.get<RamCharacter>(`${API_URL}/${id}`).pipe(
      map(mapRamToCharacter),
      catchError(() =>
        throwError(() => new Error(`Nie znaleziono postaci o ID ${id}`))
      )
    );
  }

  add(data: Omit<Character, 'id' | 'createdAt' | 'updatedAt' | 'tags'> & { imageUrl?: string }): Observable<Character> {
    const localChars = this.getLocalCharacters();
    const maxId = localChars.length > 0 ? Math.max(...localChars.map((c) => c.id)) : 100000;
    const newCharacter: Character = {
      ...data,
      id: maxId + 1,
      imageUrl: data.imageUrl || 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
      tags: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.saveLocalCharacters([...localChars, newCharacter]);
    return of({ ...newCharacter });
  }

  update(id: number, data: Partial<Character>): Observable<Character> {
    const localChars = this.getLocalCharacters();
    const index = localChars.findIndex(c => c.id === id);
    if (index === -1) {
      return throwError(() => new Error('Można edytować tylko własne postacie'));
    }
    const updated: Character = {
      ...localChars[index],
      ...data,
      updatedAt: new Date()
    };
    localChars[index] = updated;
    this.saveLocalCharacters(localChars);
    return of({ ...updated });
  }

  delete(id: number): Observable<void> {
    const localChars = this.getLocalCharacters();
    const filtered = localChars.filter(c => c.id !== id);
    if (filtered.length === localChars.length) {
      return throwError(() => new Error('Można usuwać tylko własne postacie'));
    }
    this.saveLocalCharacters(filtered);
    return of(void 0);
  }
}