import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PmDashboardComponent } from './pm-dashboard/pm-dashboard.component';
import { PmProjectsComponent } from './pm-projects/pm-projects.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { TasksComponent } from './Tasks/tasks/tasks.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { MembersTabComponent } from './view-project/members-tab/members-tab.component';

@NgModule({
  declarations: [
    PmDashboardComponent,
    PmProjectsComponent,
    ViewProjectComponent,
    TasksComponent,
    EditProjectComponent,
    MembersTabComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
