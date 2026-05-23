import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private characterService = inject(CharacterService);

  character: Character | undefined;
  statusLabels = STATUS_LABELS;
  isLoading = false;
  isDeleting = false;
  isLocal = false;
  confirmDelete = false;
  error = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    this.characterService.getById(id).subscribe({
      next: (data) => {
        this.character = data;
        this.isLocal = this.characterService.isLocal(data.id);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }

  onDelete(): void {
    if (!this.character) return;
    this.isDeleting = true;
    this.characterService.delete(this.character.id).subscribe({
      next: () => this.router.navigate(['/characters']),
      error: (err) => {
        this.error = err.message;
        this.isDeleting = false;
        this.confirmDelete = false;
      }
    });
  }
}