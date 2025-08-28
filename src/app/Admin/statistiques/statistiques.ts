import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistiques.html',
  styleUrls: ['./statistiques.css']
})
export class Statistiques {
  stats = {
    affected: {
      title: 'Etudiants affectés',
      percentage: 80,
      bars: [63, 47, 81, 52, 47],
      labels: ['Licence Science Info', 'Licence G. Mécanique', 'Licence Electronique', 'Licence Electromécanique'],
      colors: ['purple', 'blue', 'orange', 'lightyellow']
    },
    issatStage: {
      title: 'Etudiants ayant fait un stage à l\'issat',
      percentage: 80,
      bars: [63, 47, 81, 52, 47],
      labels: ['Ing. G. Logici', 'Master SPI', 'Master G. mécanique', 'Master G. électronique'],
      colors: ['purple', 'blue', 'orange', 'lightyellow']
    },
    throughIssat: {
      title: 'Etudiants ayant fait un stage travers l\'issat',
      percentage: 80,
      bars: [63, 47, 81, 52, 47],
      labels: ['Ing. G. Logici', 'Master SPI', 'Master G. mécanique', 'Master G. électronique'],
      colors: ['purple', 'blue', 'orange', 'lightyellow']
    }
  };
}