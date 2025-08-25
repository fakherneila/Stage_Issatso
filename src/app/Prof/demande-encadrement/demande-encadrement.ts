import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor and *ngIf

@Component({
  selector: 'app-demande-encadrement',
  standalone: true,
  imports: [CommonModule], // Ensure CommonModule is imported
  templateUrl: './demande-encadrement.html',
  styleUrl: './demande-encadrement.css'
})
export class DemandeEncadrementComponent {
  requests = [
    { name: 'Alice Martin', email: 'alice.martin@example.com', status: 'En attente', submissionDate: '2025-08-20', avatar: `https://ui-avatars.com/api/?name=Alice+Martin&size=30&background=0D8ABC&color=fff`, isModifying: false },
    { name: 'Bob Dubois', email: 'bob.dubois@example.com', status: 'Approuvé', submissionDate: '2025-08-19', avatar: `https://ui-avatars.com/api/?name=Bob+Dubois&size=30&background=0D8ABC&color=fff`, isModifying: false },
    { name: 'Clara Roux', email: 'clara.roux@example.com', status: 'Rejeté', submissionDate: '2025-08-18', avatar: `https://ui-avatars.com/api/?name=Clara+Roux&size=30&background=0D8ABC&color=fff`, isModifying: false },
    { name: 'David Lefèvre', email: 'david.lefevre@example.com', status: 'En attente', submissionDate: '2025-08-17', avatar: `https://ui-avatars.com/api/?name=David+Lefèvre&size=30&background=0D8ABC&color=fff`, isModifying: false },
    { name: 'Emma Blanc', email: 'emma.blanc@example.com', status: 'Approuvé', submissionDate: '2025-08-16', avatar: `https://ui-avatars.com/api/?name=Emma+Blanc&size=30&background=0D8ABC&color=fff`, isModifying: false },
    { name: 'Fiona Girard', email: 'fiona.girard@example.com', status: 'En attente', submissionDate: '2025-08-15', avatar: `https://ui-avatars.com/api/?name=Fiona+Girard&size=30&background=0D8ABC&color=fff`, isModifying: false }
  ];

  approveRequest(request: any) {
    request.status = 'Approuvé';
    request.isModifying = false;
  }

  rejectRequest(request: any) {
    request.status = 'Rejeté';
    request.isModifying = false;
  }

  abandonRequest(request: any) {
    request.status = 'En attente';
    request.isModifying = false; // Reset to show "Modifier" button
  }

  toggleModify(request: any) {
    request.isModifying = !request.isModifying;
  }
}