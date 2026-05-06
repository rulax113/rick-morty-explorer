import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../core/services/character.service';

@Component({
  selector: 'app-character-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './character-form.html',
  styleUrl: './character-form.scss',
})
export class CharacterForm {
  form: FormGroup;
  isSubmitting = false;

  statuses = [
    { value: 'active', label: 'Aktywny' },
    { value: 'retired', label: 'Na emeryturze' },
    { value: 'deceased', label: 'Poległy' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private characterService: CharacterService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      series: ['', Validators.required],
      status: ['active', Validators.required],
      power: [5, [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.isSubmitting = true;
    this.characterService.add(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/characters']);
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }
}