import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-infos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-infos.html',
  styleUrl: './student-infos.css'
})
export class StudentInfosComponent {
  @Output() nextStep = new EventEmitter<void>();
}