import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./sidebar/sidebar";
import { CompanyInfosComponent } from "./company-infos/company-infos";
import { SuperviserInfosComponent } from "./superviser-infos/superviser-infos";
import { StudentInfosComponent } from "./student-infos/student-infos";
import { Header } from "./header/header";
import { Aside } from "./aside/aside";

@Component({
  selector: 'app-root',
  imports: [ Sidebar, CompanyInfosComponent, SuperviserInfosComponent, StudentInfosComponent, Header, Aside],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'StageIssatSo';
  currentStep = 1;

  goToNextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }
}
