import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { FormContainerComponent } from './app/Student/form-container/form-container';
import { DeposerRapportComponent } from './app/Student/deposer-rapport/deposer-rapport';
import { VoirSoutenanceComponent } from './app/Student/voir-soutenance/voir-soutenance';
import { HistoriqueComponent } from './app/Student/historique/historique';
import { DefaultComponent } from './app/Student/default/default';

// Explicitly type the routes array as Routes
const routes: import('@angular/router').Routes = [
  { path: 'remplir-formulaire', component: FormContainerComponent },
  { path: 'deposer-rapport', component: DeposerRapportComponent },
  { path: 'voir-soutenance', component: VoirSoutenanceComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: '', component: DefaultComponent, pathMatch: 'full' as const } // Use 'full' as a literal type
];

// Merge appConfig providers with routing
const updatedConfig = {
  ...appConfig,
  providers: [...(appConfig.providers || []), provideRouter(routes, withComponentInputBinding())]
};

bootstrapApplication(AppComponent, updatedConfig)
  .catch((err) => console.error(err));