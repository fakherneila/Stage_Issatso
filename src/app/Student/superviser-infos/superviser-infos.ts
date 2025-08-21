import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-superviser-infos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './superviser-infos.html',
  styleUrls: ['./superviser-infos.css']
})
export class SuperviserInfosComponent {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  
  supervisorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.supervisorForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numTel: ['', Validators.required],
      autreNumTel: [''], // Optional field
      fonction: ['', Validators.required]
    });
  }

  onNext() {
    if (this.supervisorForm.valid) {
      this.next.emit();
    }
  }

  onPrevious() {
    this.previous.emit();
  }
}