import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MOCK_CHARACTERS } from '../../core/models/characters.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  projectName = 'Marvel Library';
  projectDescription = 'Aplikacja do przeglądania bohaterów Marvel — sprawdzaj statusy, serie i poziom mocy postaci.';
  author = {
    name: 'Dominik Ruszkiewicz',
    study: 'Informatyka, sem. VI',
    note: 'Projekt semestralny z przedmiotu Framework Angular.'
  };

  total = MOCK_CHARACTERS.length;
  active = MOCK_CHARACTERS.filter(c => c.status === 'active').length;
  deceased = MOCK_CHARACTERS.filter(c => c.status === 'deceased').length;
  retired = MOCK_CHARACTERS.filter(c => c.status === 'retired').length;
  strongest = MOCK_CHARACTERS.reduce((a, b) => a.power > b.power ? a : b);
}