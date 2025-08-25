import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for NgIf
import { SidebarComponent } from './Student/sidebar/sidebar'; // app-sidebar (student)
import { Header } from './Student/header/header';
import { Aside } from './Student/aside/aside';
import { SidebarProfComponent } from './Prof/sidebar/sidebar'; // app-sidebar-prof

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, // Add CommonModule for NgIf
    SidebarComponent, // app-sidebar (student)
    SidebarProfComponent, // app-sidebar-prof
    Header,
    Aside,
    RouterModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  title = 'StageIssatSo';
  currentStep = 1;
  currentSection: string = 'student'; // Default section

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.startsWith('/prof')) {
          this.currentSection = 'prof';
        } else {
          this.currentSection = 'student';
        }
      }
    });
  }

  goToNextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }
}