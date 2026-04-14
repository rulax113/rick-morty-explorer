import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Character } from '../../core/models/character.model';
import { MOCK_CHARACTERS } from '../../core/models/characters.data';
import { ItemCard } from '../../shared/components/item-card/item-card';
import { EmptyState } from '../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-characters',
  imports: [CommonModule, RouterLink, ItemCard, EmptyState],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters {
  characters: Character[] = MOCK_CHARACTERS;
  searchQuery = '';

  get filteredCharacters(): Character[] {
    const q = this.searchQuery.toLowerCase();
    return this.characters.filter(c =>
      c.name.toLowerCase().includes(q) || c.series.toLowerCase().includes(q)
    );
  }

  onSearchChange(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  onCardSelected(character: Character): void {
    console.log('Wybrano:', character.name);
  }
}