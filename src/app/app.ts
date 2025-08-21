import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SidebarComponent } from "./Student/sidebar/sidebar";
import { CompanyInfosComponent } from "./Student/company-infos/company-infos";
import { SuperviserInfosComponent } from "./Student/superviser-infos/superviser-infos";
import { StudentInfosComponent } from "./Student/student-infos/student-infos";
import { Header } from "./Student/header/header";
import { Aside } from "./Student/aside/aside";


@Component({
  selector: 'app-root',
  imports: [SidebarComponent, CompanyInfosComponent, SuperviserInfosComponent, StudentInfosComponent, Header, Aside, RouterModule],
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
