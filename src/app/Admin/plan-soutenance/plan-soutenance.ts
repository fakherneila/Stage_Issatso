import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-soutenance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-soutenance.html',
  styleUrls: ['./plan-soutenance.css']
})
export class PlanSoutenance {
  students = [
    { name: 'Wael Belhaj', supervisor: 'Soufien Ikhouili', subjectCode: '045' },
    { name: 'Radhwen Belkhir', supervisor: 'Houssem Belhaj', subjectCode: '055' },
    { name: 'Mohamned', supervisor: '', subjectCode: '' },
    { name: 'Ali Mohamed', supervisor: 'Fatma Elahi', subjectCode: '060' },
    { name: 'Sara Khaled', supervisor: 'Ahmed Zaki', subjectCode: '070' }
  ];

  professors = [
    { name: 'Wael Belhaj', supervisor: 'Soufien Ikhouili', subjectCode: '045', selected: true },
    { name: 'Radhwen Belkhir', supervisor: 'Houssem Belhaj', subjectCode: '055', selected: true },
    { name: 'Mohamned', supervisor: '', subjectCode: '', selected: false },
    { name: 'Fatma Elahi', supervisor: 'Ahmed Zaki', subjectCode: '060', selected: false },
    { name: 'Ahmed Zaki', supervisor: 'Fatma Elahi', subjectCode: '070', selected: true }
  ];
}