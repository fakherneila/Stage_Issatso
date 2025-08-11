import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-infos',
  standalone: true, // Indicates this is a standalone component
  imports: [ReactiveFormsModule, CommonModule], // Add required modules here
  templateUrl: './company-infos.html',
  styleUrls: ['./company-infos.css'],
   template: `
    <app-company-infos (next)="onNext()"></app-company-infos>
  `
})
export class CompanyInfosComponent {
  @Output() next = new EventEmitter<void>();
  companyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      societe: ['', Validators.required],
      domaine: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  onNext() {
    if (this.companyForm.valid) {
      this.next.emit();
    }
  }
}