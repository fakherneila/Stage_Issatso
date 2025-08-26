import { Routes } from '@angular/router';
import { FormContainerComponent } from './Student/form-container/form-container';
import { DeposerRapportComponent } from './Student/deposer-rapport/deposer-rapport';
import { HistoriqueComponent } from './Student/historique/historique';
import { DemandeEncadrementComponent } from './Prof/demande-encadrement/demande-encadrement';
import { EncadrementComponent } from './Prof/encadrement/encadrement';
 import { VoirSoutenanceComponent } from './Student/voir-soutenance/voir-soutenance'; // Updated import
import { VoirSoutounanceComponent } from './Prof/voir-soutounance/voir-soutounance';

export const routes: Routes = [
  // Student routes
  { path: 'remplir-formulaire', component: FormContainerComponent },
  { path: 'deposer-rapport', component: DeposerRapportComponent },
  { path: 'voir-soutenance', component: VoirSoutenanceComponent },
  { path: 'historique', component: HistoriqueComponent },

  // Prof routes
  {
    path: 'prof',
    children: [
      { path: 'demande-encadrement', component: DemandeEncadrementComponent },
      { path: 'soutenances', component: VoirSoutounanceComponent }, // Correct component
      { path: 'encadrement', component: EncadrementComponent }
    ]
  },

  // Default redirect
  { path: '**', redirectTo: 'remplir-formulaire' }
];