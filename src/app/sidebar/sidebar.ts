import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  isStageOpen = false;
  stageItems = [
    { label: 'Remplir formulaire', route: '/remplir-formulaire' },
    { label: 'Déposer rapport', route: '/deposer-rapport' },
    { label: 'Voir soutenance', route: '/voir-soutenance' },
    { label: 'Historique', route: '/historique' }
  ];

  toggleStage() {
    this.isStageOpen = !this.isStageOpen;
  }
}