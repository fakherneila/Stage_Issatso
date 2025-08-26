import { Routes } from '@angular/router';
import { FormContainerComponent } from './Student/form-container/form-container';
import { DeposerRapportComponent } from './Student/deposer-rapport/deposer-rapport';
import { HistoriqueComponent } from './Student/historique/historique';
import { DemandeEncadrementComponent } from './Prof/demande-encadrement/demande-encadrement';
import { EncadrementComponent } from './Prof/encadrement/encadrement';
import { VoirSoutenanceComponent } from './Student/voir-soutenance/voir-soutenance';
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
      { path: 'soutenances', component: VoirSoutounanceComponent },
      { path: 'encadrement', component: EncadrementComponent }
    ]
  },

  // Admin routes
  {
    path: 'admin',
    children: [
      { path: 'annonces-stage', component: FormContainerComponent }, // Placeholder component
      { path: 'validation-stage', component: FormContainerComponent }, // Placeholder component
      { path: 'plan-soutenances', component: VoirSoutounanceComponent }, // Reuse existing component
      { path: 'statistiques', component: HistoriqueComponent } // Placeholder component
    ]
  },

  // Default redirect
  { path: '**', redirectTo: 'remplir-formulaire' }
];