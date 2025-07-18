import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TaskService } from 'src/app/_services/pm-services/task.service';
import { DataService } from 'src/app/_services/shared-data/data.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.sass'],
})
export class AddNewTaskComponent {
  public taskForm!: FormGroup;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private notificationService: NzNotificationService,
    private taskService: TaskService,
    private modalref: NzModalRef
  ) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      taskTitle: ['', [Validators.required]],
      taskDescription: ['', [Validators.required]],
      status: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      estimatedTime: ['', [Validators.required]],
    });
  }

  get taskTitle() {
    return this.taskForm.get('taskTitle');
  }
  get taskDescription() {
    return this.taskForm.get('taskDescription');
  }
  get status() {
    return this.taskForm.get('status');
  }
  get priority() {
    return this.taskForm.get('priority');
  }
  get startDate() {
    return this.taskForm.get('startDate');
  }
  get endDate() {
    return this.taskForm.get('endDate');
  }
  get estimatedTime() {
    return this.taskForm.get('estimatedTime');
  }

  createNewproject() {
    if (!this.taskForm.valid) {
      return this.validateFormFields(this.taskForm);
    } else {
      const formData: any = {
        title: 'string',
        description: 'string',
        status: 'to_do',
        priority: 'medium',
        due_date: '2025-07-16T17:11:00.508Z',
        estimated_hours: 0,
        tags: ['string'],
        column_id: 'string',
        position: 0,
        project_id: 'string',
        reporter_id: 'string',
        assignee_id: 'string',
      };
      this.taskService
        .cerateNewTask(formData, this.dataService.projectData.id)
        .subscribe((res: any) => {
          if (res) {
            console.log(res['data']);
            this.notificationService.create(
              'success',
              'Success',
              'Task created successfully',
              { nzStyle: { background: '#17ac2bff', color: '#fff' } }
            );
            this.modalref.close();
          } else {
            this.notificationService.create(
              'error',
              'Input Error',
              'Task created failed',
              { nzStyle: { background: '#cc2d2d', color: '#fff' } }
            );
          }
        });
    }
  }

  getFieldName(option: any): any {
    switch (option) {
      case 'taskTitle': {
        return 'Task Title';
      }
      case 'taskDescription': {
        return 'Task Description';
      }
      case 'status': {
        return 'Status';
      }
      case 'priority': {
        return 'Priority';
      }
      case 'startDate': {
        return 'Start Date';
      }
      case 'endDate': {
        return 'End Date';
      }
      case 'stimatedTime': {
        return 'stimated Time';
      }
    }
  }

  validateFormFields(formgroup: FormGroup) {
    Object.keys(this.taskForm.controls).forEach((field: any) => {
      const control = formgroup.get(field);
      if (control instanceof FormControl) {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          const fieldName = this.getFieldName(field);
          this.notificationService.create(
            'error',
            'Input Error',
            fieldName + ' cannot be empty',
            { nzStyle: { background: '#cc2d2d', color: '#fff' } }
          );
        }
      } else if (control instanceof FormGroup) {
        this.validateFormFields(control);
      }
    });
  }
}
