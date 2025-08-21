import { Routes } from '@angular/router';

// Student Components
import { FormContainerComponent } from './Student/form-container/form-container';
import { DeposerRapportComponent } from './Student/deposer-rapport/deposer-rapport';
import { VoirSoutenanceComponent } from './Student/voir-soutenance/voir-soutenance';
import { HistoriqueComponent } from './Student/historique/historique';
import { DemandeEncadrement } from './Prof/demande-encadrement/demande-encadrement';
import { E } from '@angular/cdk/keycodes';
import { Encadrement } from './Prof/encadrement/encadrement';

// // Admin Components
// import { ValiderComponent } from './Admin/valider/valider';
// import { AdminDashboardComponent } from './Admin/dashboard/dashboard';

// // Prof Components
// import { ProfDashboardComponent } from './Prof/dashboard/dashboard';
// import { ProfSoutenancesComponent } from './Prof/soutenances/soutenances';

export const routes: Routes = [
  // Student routes
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

//   // Admin routes (grouped under /admin)
//   {
//     path: 'admin',
//     children: [
//       { path: '', component: AdminDashboardComponent }, // /admin
//       { path: 'valider', component: ValiderComponent }, // /admin/valider
//       { path: 'historique', component: HistoriqueComponent } // /admin/historique (example)
//     ]
//   },

//   // Prof routes (grouped under /prof)
  {
    path: 'prof',
    children: [
      { path: 'demande-encadrement', component: DemandeEncadrement }, // /prof
      { path: 'soutenances', component: VoirSoutenanceComponent }, // /prof/soutenances
      { path: 'encadrement', component: Encadrement } // /prof/encadrement
    ]
  },

  // Default redirect
  {
    path: '**',
    redirectTo: 'remplir-formulaire'
  }
 ];
