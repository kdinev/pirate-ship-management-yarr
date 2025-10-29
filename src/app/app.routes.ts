import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { CrewManagementViewComponent } from './crew-management-view/crew-management-view.component';
import { SuppliesCargoViewComponent } from './supplies-cargo-view/supplies-cargo-view.component';
import { ShipMaintenanceViewComponent } from './ship-maintenance-view/ship-maintenance-view.component';
import { AmmunitionViewComponent } from './ammunition-view/ammunition-view.component';
import { PiratingPlansViewComponent } from './pirating-plans-view/pirating-plans-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'crew-management-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'crew-management-view', component: CrewManagementViewComponent, data: { text: 'Crew-Management-View' } },
  { path: 'supplies-cargo-view', component: SuppliesCargoViewComponent, data: { text: 'Supplies-Cargo-View' } },
  { path: 'ship-maintenance-view', component: ShipMaintenanceViewComponent, data: { text: 'Ship-Maintenance-View' } },
  { path: 'ammunition-view', component: AmmunitionViewComponent, data: { text: 'Ammunition-View' } },
  { path: 'pirating-plans-view', component: PiratingPlansViewComponent, data: { text: 'Pirating-Plans-View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
