import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-company-infos',
  imports: [],
  templateUrl: './company-infos.html',
  styleUrl: './company-infos.css'
})
export class CompanyInfosComponent {
  @Output() nextStep = new EventEmitter<void>();
}
