import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { IssuesService } from 'src/app/_services/pm-services/issues.service';
import { DataService } from 'src/app/_services/shared-data/data.service';

@Component({
  selector: 'app-add-new-issues',
  templateUrl: './add-new-issues.component.html',
  styleUrls: ['./add-new-issues.component.sass'],
})
export class AddNewIssuesComponent {
  public IssuesForm!: FormGroup;
  @Input() data: any;
  @Input() index: any = 'view';

  allMembers: any = [];
  allReporters: any = [];
  allPeojects: any = [];
  assignee: any;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private modalRef: NzModalRef,
    private notificationService: NzNotificationService,
    private resourcesService: IssuesService
  ) {}

  ngOnInit() {
    this.IssuesForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      status: [null, Validators.required],
      priority: [null, Validators.required],
      issue_type: [null, Validators.required],
      assignee: [null, Validators.required],
      reporter: [null, Validators.required],
      project: [null, Validators.required],
      create_date: [null, Validators.required],
      update_date: [null, Validators.required],
    });
    if (this.index !== 'create') {
      // this.getProgectData();
    }
  }

  createNewIssues() {}
  updateIssues() {}
}
