import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-prof',
  standalone: true,
  imports: [MatIconModule, RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  isStageOpen = false;
  stageItems = [
    { label: 'Encadrement', route: '/prof/encadrement' },
  { label: 'Demande Encadrement', route: '/prof/demande-encadrement' },
  { label: 'Voir soutenance', route: '/prof/voir-soutenance' },
  // { label: 'Historique', route: '/prof/historique' }
  ];

  toggleStage() {
    this.isStageOpen = !this.isStageOpen;
  }
}