import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Character, STATUS_LABELS } from '../../core/models/character.model';
import { MOCK_CHARACTERS } from '../../core/models/characters.data';

@Component({
  selector: 'app-character-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss',
})
export class CharacterDetail implements OnInit {
  character: Character | undefined;
  statusLabels = STATUS_LABELS;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.character = MOCK_CHARACTERS.find(c => c.id === id);
  }
}