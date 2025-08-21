import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInfosComponent } from '../company-infos/company-infos';  // Adjust path if needed
import { SuperviserInfosComponent } from '../Student/superviser-infos/superviser-infos';  // Adjust path if needed
import { StudentInfosComponent } from '../Student/student-infos/student-infos';  // Adjust path if needed

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [CommonModule, CompanyInfosComponent, SuperviserInfosComponent, StudentInfosComponent],
  templateUrl: './form-container.html',
  styleUrl: './form-container.css'
})
export class FormContainerComponent {}