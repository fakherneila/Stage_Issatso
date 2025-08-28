import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valider-stage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valider-stage.html',
  styleUrls: ['./valider-stage.css']
})
export class ValiderStage {
  users = [
    { id: 1, name: 'Darlene Robertson', email: 'truongkienpktd@gmail.com', status: 'Validé', company: 'Axia' },
    { id: 2, name: 'Devon Lane', email: 'tranlhuy.nute@gmail.com', status: 'En attente', company: null },
    { id: 3, name: 'Cody Fisher', email: 'tienlapsktnd@gmail.com', status: 'Validé', company: 'Box2home' },
    { id: 4, name: 'Theresa Webb', email: 'thuhang.nute@gmail.com', status: 'Validé', company: 'Proxym' },
    { id: 5, name: 'Savannah Nguyen', email: 'manhhachtk08@gmail.com', status: 'Validé', company: 'Satoripop' },
    { id: 6, name: 'Eleanor Pena', email: 'vuhaithuongnute@gmail.com', status: 'En attente', company: null },
    { id: 7, name: 'Marvin McKinney', email: 'binhanh628@gmail.com', status: 'Validé', company: 'Ilef.Mon' },
    { id: 8, name: 'Cameron Williamson', email: 'ckctm12@gmail.com', status: 'En attente', company: 'PPC Expert' }
  ];
}