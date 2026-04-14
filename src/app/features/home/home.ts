import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
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
}