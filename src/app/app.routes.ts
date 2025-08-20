import { Routes } from '@angular/router';
import { FormContainerComponent } from './form-container/form-container';
import { DeposerRapportComponent } from './deposer-rapport/deposer-rapport';
import { VoirSoutenanceComponent } from './voir-soutenance/voir-soutenance';
import { HistoriqueComponent } from './historique/historique';

export const routes: Routes = [
  {
    path: 'remplir-formulaire',
    component: FormContainerComponent
  },
  {
    path: 'deposer-rapport',
    component: DeposerRapportComponent
  },
  {
    path: 'voir-soutenance',
    component: VoirSoutenanceComponent
  },
  {
    path: 'historique',
    component: HistoriqueComponent
  },
  {
    path: '**',
    redirectTo: 'remplir-formulaire'
  }
];
