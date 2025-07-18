import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    children: [
      { path: '', component: HrDashboardComponent }, // default dashboard
      // { path: 'projects', component: PmProjectsComponent },
      // { path: 'tasks', component: TasksComponent },
      // { path: 'resources', component: ResourcesComponent },
      // { path: 'crm', component: CrmDashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule {}
