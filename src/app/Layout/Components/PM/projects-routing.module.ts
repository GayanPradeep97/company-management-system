import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PmDashboardComponent } from './pm-dashboard/pm-dashboard.component';
import { DevFlowComponent } from '../../Pages/dev-flow/dev-flow/dev-flow.component';
import { PmProjectsComponent } from './pm-projects/pm-projects.component';
import { TasksComponent } from './Tasks/tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    children: [
      { path: '', component: PmDashboardComponent }, // default dashboard
      { path: 'projects', component: PmProjectsComponent },
      { path: 'tasks', component: TasksComponent },
      // { path: 'finance', component: FinanceDashboardComponent },
      // { path: 'crm', component: CrmDashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
