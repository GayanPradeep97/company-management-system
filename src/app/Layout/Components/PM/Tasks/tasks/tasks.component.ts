import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskService } from 'src/app/_services/pm-services/task.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddNewTaskComponent } from '../add-new-task/add-new-task.component';
import { ProjectsService } from 'src/app/_services/pm-services/projects.service';

interface Task {
  title: string;
  // add other properties as needed
  [key: string]: any;
}

interface KanbanColumn {
  title: string;
  status: string;
  tasks: Task[];
}
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass'],
})
export class TasksComponent {
  allprojects: any;

  pageNumber: any = 1;
  pageSize: any = 10;
  totalRecord: any;
  currentPageIndex = 1;
  // columns: any = [];
  columns: KanbanColumn[] = [
    { title: 'To Do', status: 'to_do', tasks: [] },
    { title: 'In Progress', status: 'in_progress', tasks: [] },
    { title: 'In Review', status: 'in_review', tasks: [] },
    { title: 'Done', status: 'done', tasks: [] },
  ];
  AllprojectTasks: any = [];
  projectId: any;
  status: any;
  assignee: any;

  connectedDropListsIds: string[] = [];

  constructor(
    private taskService: TaskService,
    private modalService: NzModalService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.getAllTaskslist();
    this.getAllprojects();
    this.getAllprojectTasks();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getAllTaskslist() {
    this.taskService.getAllTaskList().subscribe((res: any) => {
      if (res && res['data']) {
        this.columns = res['data'].map((status: string) => {
          let title = '';
          switch (status) {
            case 'to_do':
              title = 'To Do';
              break;
            case 'in_progress':
              title = 'In Progress';
              break;
            case 'in_review':
              title = 'In Review';
              break;
            case 'done':
              title = 'Done';
              break;
            default:
              title = status;
          }
          return { title, status, tasks: [] };
        });

        this.connectedDropListsIds = this.columns.map(
          (col, i) => `cdk-drop-list-${i}`
        );
      }
    });
  }

  getProjectId(id: any) {
    this.projectId = id;
    console.log('project id', id);
    this.getAllprojectTasks();
  }
  getStatus(id: any) {
    this.status = id;
    console.log('project id', id);
    this.getAllprojectTasks();
  }

  getAllprojectTasks() {
    const data: any = [];
    data['skip'] = 0;
    data['limit'] = 10;
    data['search'] = 'gayan';
    data['project_id'] = this.projectId;
    data['status'] = this.status;
    data['assignee'] = this.assignee;

    this.taskService.getProjectTasks(data).subscribe((res: any) => {
      if (res && res['data']) {
        this.AllprojectTasks = res['data'];
        console.log(this.AllprojectTasks[0]['status']);

        this.columns.forEach((col) => {
          col.tasks = this.AllprojectTasks.filter(
            (task: { status: any }) => task.status === col.status
          );
          console.log(this.columns);
        });
      }
    });
  }

  getAllprojects() {
    const data: any = [];
    this.projectsService.getALlProjects(data).subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.allprojects = res['data'];
      }
    });
  }

  addNewTask() {
    const modal = this.modalService.create({
      nzTitle: 'Add Task',
      nzContent: AddNewTaskComponent,
      nzFooter: null,
      nzWidth: 800,
      nzClassName: 'add-task',
    });
  }

  pageIndexChange(selectedIndex: any) {
    this.currentPageIndex = selectedIndex;
    this.pageNumber = selectedIndex;
  }
}
