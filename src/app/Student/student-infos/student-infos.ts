import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog';

@Component({
  selector: 'app-student-infos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './student-infos.html',
  styleUrls: ['./student-infos.css']
})
export class StudentInfosComponent {
  @Output() previous = new EventEmitter<void>();
  
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.studentForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      niveau: ['', Validators.required],
      numTel: ['', Validators.required],
      gmail: ['', [Validators.required, Validators.email]],
      specialite: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      // Here you would typically send data to your backend
      // For demo, we'll just show the success popup
      this.showSuccessPopup();
    }
  }

  showSuccessPopup() {
    this.dialog.open(SuccessDialogComponent, {
      width: '350px',
      data: { message: 'Données soumises avec succès!' }
    });
  }

  onPrevious() {
    this.previous.emit();
  }
}