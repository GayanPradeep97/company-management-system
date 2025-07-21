import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentComponent } from './department/department.component';
import { PositionsComponent } from './positions/positions.component';
import { LeavesComponent } from './leaves/leaves.component';
import { PerformanceComponent } from './performance/performance.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    children: [
      { path: '', component: HrDashboardComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'departments', component: DepartmentComponent },
      { path: 'positions', component: PositionsComponent },
      { path: 'leaves', component: LeavesComponent },

      { path: 'performance', component: PerformanceComponent },
      // { path: 'recruitment', component: RecruitmentComponent },
      // { path: 'training', component: TrainingComponent },
      // { path: 'reports', component: ReportsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule {}
