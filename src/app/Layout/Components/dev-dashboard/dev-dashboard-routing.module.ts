import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DevDashboardComponent } from './dev-dashboard.component';
import { DevFlowComponent } from '../../Pages/dev-flow/dev-flow/dev-flow.component';

const routes: Routes = [
  {
    path: '',
    component: DevDashboardComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevDashboardRoutingModule {}
