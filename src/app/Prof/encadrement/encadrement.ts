import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor and *ngIf

@Component({
  selector: 'app-encadrement',
  standalone: true,
  imports: [CommonModule], // Ensure CommonModule is imported
  templateUrl: './encadrement.html',
  styleUrl: './encadrement.css'
})
export class EncadrementComponent {
  reports = [
    { name: 'Alice Martin', email: 'alice.martin@example.com', reportLink: '/download/report-alice.pdf', overleafLink: 'https://www.overleaf.com/project/dummy-alice', avatar: `https://ui-avatars.com/api/?name=Alice+Martin&size=30&background=0D8ABC&color=fff` },
    { name: 'Bob Dubois', email: 'bob.dubois@example.com', reportLink: '/download/report-bob.pdf', overleafLink: 'https://www.overleaf.com/project/dummy-bob', avatar: `https://ui-avatars.com/api/?name=Bob+Dubois&size=30&background=0D8ABC&color=fff` },
    { name: 'Clara Roux', email: 'clara.roux@example.com', reportLink: '/download/report-clara.pdf', overleafLink: 'https://www.overleaf.com/project/dummy-clara', avatar: `https://ui-avatars.com/api/?name=Clara+Roux&size=30&background=0D8ABC&color=fff` },
    { name: 'David Lefèvre', email: 'david.lefevre@example.com', reportLink: '/download/report-david.pdf', overleafLink: null, avatar: `https://ui-avatars.com/api/?name=David+Lefèvre&size=30&background=0D8ABC&color=fff` },
    { name: 'Emma Blanc', email: 'emma.blanc@example.com', reportLink: '/download/report-emma.pdf', overleafLink: 'https://www.overleaf.com/project/dummy-emma', avatar: `https://ui-avatars.com/api/?name=Emma+Blanc&size=30&background=0D8ABC&color=fff` },
    { name: 'Fiona Girard', email: 'fiona.girard@example.com', reportLink: '/download/report-fiona.pdf', overleafLink: null, avatar: `https://ui-avatars.com/api/?name=Fiona+Girard&size=30&background=0D8ABC&color=fff` }
  ];
}