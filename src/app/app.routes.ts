import { Routes } from '@angular/router';

// Student Components
import { FormContainerComponent } from './Student/form-container/form-container';
import { DeposerRapportComponent } from './Student/deposer-rapport/deposer-rapport';
import { VoirSoutenanceComponent } from './Student/voir-soutenance/voir-soutenance';
import { HistoriqueComponent } from './Student/historique/historique';

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
//   {
//     path: 'prof',
//     children: [
//       { path: '', component: ProfDashboardComponent }, // /prof
//       { path: 'soutenances', component: ProfSoutenancesComponent } // /prof/soutenances
//     ]
//   },

//   // Default redirect
//   {
//     path: '**',
//     redirectTo: 'remplir-formulaire'
//   }
 ];
