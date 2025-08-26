import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-admin',
  standalone: true,
  imports: [MatIconModule, RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarAdminComponent {
  isStageOpen = false;
  stageItems = [
    { label: 'Annonces de stage', route: '/admin/annonces-stage' },
    { label: 'Validation de Stage', route: '/admin/validation-stage' },
    { label: 'Plan Soutenance', route: '/admin/plan-soutenances' },
    { label: 'Statistiques', route: '/admin/statistiques' }
  ];

  toggleStage() {
    this.isStageOpen = !this.isStageOpen;
  }
}