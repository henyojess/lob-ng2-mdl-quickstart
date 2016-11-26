import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainScreenComponent } from '../main-screen/main-screen.component';
import { DashboardScreenComponent } from '../dashboard-screen/dashboard-screen.component';

const mainRoutes: Routes = [
  { path: '', redirectTo: '/main/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardScreenComponent },
]
const routes: Routes = [
  { path: 'main',  component: MainScreenComponent , children: mainRoutes},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainScreenRoutingModule {}
