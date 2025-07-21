import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HrRoutingModule } from './hr-routing.module';

// Components
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentComponent } from './department/department.component';
import { PositionsComponent } from './positions/positions.component';
import { LeavesComponent } from './leaves/leaves.component';
import { PerformanceComponent } from './performance/performance.component';
import { AddNewEmployeeComponent } from './employees/add-new-employee/add-new-employee.component';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AddNewDepartmentComponent } from './department/add-new-department/add-new-department.component';

@NgModule({
  declarations: [
    HrDashboardComponent,
    EmployeesComponent,
    DepartmentComponent,
    PositionsComponent,
    LeavesComponent,
    PerformanceComponent,
    AddNewEmployeeComponent,
    ViewEmployeeComponent,
    AddNewDepartmentComponent,
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzSelectModule,
  ],
  exports: [SharedModule],
})
export class HrModule {}
