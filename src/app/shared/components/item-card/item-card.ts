import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Character, STATUS_LABELS } from '../../../core/models/character.model';
import { CharacterService } from '../../../core/services/character.service';

@Component({
  selector: 'app-item-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss',
})
export class ItemCard {
  private characterService = inject(CharacterService);

  @Input() character!: Character;
  @Output() selected = new EventEmitter<Character>();

  statusLabels = STATUS_LABELS;
  showDetails = false;

  get isLocal(): boolean {
    return this.characterService.isLocal(this.character.id);
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  onSelect(): void {
    this.selected.emit(this.character);
  }
}