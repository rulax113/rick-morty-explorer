import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Character, STATUS_LABELS } from '../../../core/models/character.model';

@Component({
  selector: 'app-item-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss',
})
export class ItemCard {
  @Input() character!: Character;
  @Output() selected = new EventEmitter<Character>();

  statusLabels = STATUS_LABELS;
  showDetails = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  onSelect(): void {
    this.selected.emit(this.character);
  }
}