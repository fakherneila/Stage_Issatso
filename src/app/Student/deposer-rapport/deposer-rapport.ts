import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposer-rapport',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './deposer-rapport.html',
  styleUrls: ['./deposer-rapport.css']
})
export class DeposerRapportComponent {
  rapportForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rapportForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      codeSujet: ['', Validators.required],
      versionPdf: [null, Validators.required],
      urlOverleaf: [''], // optionnel
      motCle: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.rapportForm.valid) {
      console.log('Form Data:', this.rapportForm.value);
      alert('Rapport déposé avec succès ✅');
    } else {
      alert('Merci de remplir tous les champs obligatoires ❌');
    }
  }
}
