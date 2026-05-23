import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEdit } from './character-edit';

describe('CharacterEdit', () => {
  let component: CharacterEdit;
  let fixture: ComponentFixture<CharacterEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
