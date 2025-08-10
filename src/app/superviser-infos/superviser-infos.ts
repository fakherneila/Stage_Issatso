import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-superviser-infos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './superviser-infos.html',
  styleUrls: ['./superviser-infos.css']
})
export class SuperviserInfosComponent {
  @Output() nextStep = new EventEmitter<void>();
}
