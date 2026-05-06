import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Character, STATUS_LABELS } from '../../core/models/character.model';
import { CharacterService } from '../../core/services/character.service';
import { ErrorMessage } from '../../shared/components/error-message/error-message';

@Component({
  selector: 'app-character-detail',
  imports: [CommonModule, RouterLink, ErrorMessage],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss',
})
export class CharacterDetail implements OnInit {
  character: Character | undefined;
  statusLabels = STATUS_LABELS;
  isLoading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    this.characterService.getById(id).subscribe({
      next: (data) => {
        this.character = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }
}