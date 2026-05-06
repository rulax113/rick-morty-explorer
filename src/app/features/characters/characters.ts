import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Character } from '../../core/models/character.model';
import { CharacterService } from '../../core/services/character.service';
import { ItemCard } from '../../shared/components/item-card/item-card';
import { EmptyState } from '../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-characters',
  imports: [CommonModule, RouterLink, ItemCard, EmptyState],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters implements OnInit {
  characters: Character[] = [];
  searchQuery = '';
  isLoading = false;
  error = '';

  constructor(private characterService: CharacterService) {}

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