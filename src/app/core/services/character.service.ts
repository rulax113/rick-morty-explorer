import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Character } from '../models/character.model';
import { MOCK_CHARACTERS } from '../models/characters.data';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters: Character[] = [...MOCK_CHARACTERS];

  getAll(): Observable<Character[]> {
    return of([...this.characters]);
  }

  getById(id: number): Observable<Character> {
    const character = this.characters.find(c => c.id === id);
    if (!character) {
      return throwError(() => new Error(`Postać o ID ${id} nie istnieje`));
    }
    return of({ ...character });
  }

  add(data: Omit<Character, 'id' | 'createdAt' | 'updatedAt' | 'imageUrl' | 'tags'>): Observable<Character> {
    const newCharacter: Character = {
      ...data,
      id: Math.max(...this.characters.map(c => c.id)) + 1,
      imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
      tags: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.characters.push(newCharacter);
    return of({ ...newCharacter });
  }
}