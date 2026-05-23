import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../core/services/character.service';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private characterService = inject(CharacterService);

  projectName = 'Rick & Morty Explorer';
  projectDescription = 'Aplikacja do przeglądania postaci z serialu Rick and Morty — sprawdzaj statusy, lokacje i poziom mocy bohaterów.';
  author = {
    name: 'Dominik Ruszkiewicz',
    study: 'Informatyka, sem. VI',
    note: 'Projekt semestralny z przedmiotu Framework Angular.'
  };

  total = 0;
  active = 0;
  deceased = 0;
  retired = 0;
  strongest: Character | null = null;
  isLoading = true;

  ngOnInit(): void {
    this.characterService.getAll().subscribe({
      next: (chars) => {
        this.total = chars.length;
        this.active = chars.filter(c => c.status === 'active').length;
        this.deceased = chars.filter(c => c.status === 'deceased').length;
        this.retired = chars.filter(c => c.status === 'retired').length;
        this.strongest = chars.reduce((a, b) => a.power > b.power ? a : b);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}