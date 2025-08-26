import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-annonce-stage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './annonce-stage.html',
  styleUrls: ['./annonce-stage.css']
})
export class AnnonceStageComponent {
  virtualUsers = [
    { name: 'Darlene Robertson', email: 'trungkien.spktnd@gmail.com', status: 'Affecté', companyRole: 'Reporter', avatar: 'https://placehold.co/30x30/png?text=D', selected: false },
    { name: 'Devon Lane', email: 'tranthuy.nute@gmail.com', status: 'Non affecté', companyRole: '', avatar: 'https://placehold.co/30x30/png?text=E', selected: false },
    { name: 'Cody Fisher', email: 'tienlap.spktnd@gmail.com', status: 'Affecté', companyRole: 'Sales Manager', avatar: 'https://placehold.co/30x30/png?text=C', selected: false },
    { name: 'Theresa Webb', email: 'thuhang.nute@gmail.com', status: 'Affecté', companyRole: 'Broadcaster', avatar: 'https://placehold.co/30x30/png?text=T', selected: false },
    { name: 'Savannah Nguyen', email: 'manhhach.t08@gmail.com', status: 'Affecté', companyRole: 'Marketer', avatar: 'https://placehold.co/30x30/png?text=S', selected: false },
    { name: 'Eleanor Pena', email: 'vuhaithuongnute@gmail.com', status: 'Non affecté', avatar: 'https://placehold.co/30x30/png?text=E', selected: false },
    { name: 'Jenny Wilson', email: 'danghoang87hl@gmail.com', status: 'Non affecté', avatar: 'https://placehold.co/30x30/png?text=J', selected: false },
    { name: 'Marvin McKinney', email: 'binhan628@gmail.com', status: 'Affecté', companyRole: 'Team Editor', avatar: 'https://placehold.co/30x30/png?text=M', selected: false },
    { name: 'Cameron Williamson', email: 'ckctm12@gmail.com', status: 'Affecté', companyRole: 'PPC Expert', avatar: 'https://placehold.co/30x30/png?text=C', selected: false }
  ];

  showPopup = false;
  selectedUsers: any[] = [];
  selectedCompany: string = '';

  onImageError(event: Event, user: any) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'https://placehold.co/30x30/png?text=?'; // Fallback image
    console.log(`Failed to load avatar for ${user.name}. Using fallback.`);
  }

  onSelectionChange(user: any) {
    if (user.selected) {
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers = this.selectedUsers.filter(u => u.name !== user.name);
    }
  }

  openPopup() {
    this.selectedUsers = this.virtualUsers.filter(user => user.selected);
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedCompany = '';
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  assignInternship() {
    if (this.selectedCompany && this.selectedUsers.length > 0) {
      this.selectedUsers.forEach(user => {
        user.status = 'Affecté';
        user.companyRole = this.selectedCompany.split(',')[0]; // Take the first part as company name
      });
      console.log(`Assigned ${this.selectedUsers.length} student(s) to ${this.selectedCompany}`);
      this.closePopup();
    }
  }
}