import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Character } from '../../core/models/character.model';
import { CharacterService } from '../../core/services/character.service';
import { ItemCard } from '../../shared/components/item-card/item-card';
import { EmptyState } from '../../shared/components/empty-state/empty-state';
import { ErrorMessage } from '../../shared/components/error-message/error-message';

@Component({
  selector: 'app-characters',
  imports: [CommonModule, RouterLink, ItemCard, EmptyState, ErrorMessage],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters implements OnInit {
  private characterService = inject(CharacterService);

  characters: Character[] = [];
  searchQuery = '';
  isLoading = false;
  error = '';

  ngOnInit(): void {
    this.isLoading = true;
    this.characterService.getAll().subscribe({
      next: (data) => {
        this.characters = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }

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