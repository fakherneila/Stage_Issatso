import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule],
  template: '<div>Welcome – Select an option from the sidebar</div>',
  styleUrl: './default.css'
})
export class DefaultComponent {}