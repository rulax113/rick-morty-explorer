import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../core/services/character.service';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'app-character-edit',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './character-edit.html',
  styleUrl: './character-edit.scss',
})
export class CharacterEdit implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private characterService = inject(CharacterService);

  character: Character | null = null;
  isLoading = true;
  isSubmitting = false;
  error = '';

  statuses = [
    { value: 'active', label: 'Aktywny' },
    { value: 'retired', label: 'Na emeryturze' },
    { value: 'deceased', label: 'Polegly' }
  ];

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    series: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]],
    imageUrl: ['', [Validators.pattern('https?://.+')]],
    status: ['active', Validators.required],
    power: [5, [Validators.required, Validators.min(1), Validators.max(10)]]
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterService.getById(id).subscribe({
      next: (char) => {
        this.character = char;
        this.form.patchValue({
          name: char.name,
          series: char.series,
          description: char.description,
          imageUrl: char.imageUrl,
          status: char.status,
          power: char.power
        });
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid || !this.character) return;
    this.isSubmitting = true;
    this.characterService.update(this.character.id, this.form.value).subscribe({
      next: () => this.router.navigate(['/characters', this.character!.id]),
      error: (err) => {
        this.error = err.message;
        this.isSubmitting = false;
      }
    });
  }
}