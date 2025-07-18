import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ResourcesService } from 'src/app/_services/pm-services/resources.service';
import { DataService } from 'src/app/_services/shared-data/data.service';
import { AddNewResourcesComponent } from '../add-new-resources/add-new-resources.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass'],
})
export class ResourcesComponent {
  allResourcesList: any;

  pageNumber: any = 1;
  pageSize: any = 10;
  totalRecord: any;
  currentPageIndex = 1;

  constructor(
    private dataService: DataService,
    private resourcesService: ResourcesService,
    private modalService: NzModalService
  ) {}

  ngOnInit() {
    this.getAllResourcesList();
  }

  getAllResourcesList() {
    const data: any = [];
    data['skip'] = this.pageNumber;
    data['limit'] = this.pageSize;
    data['project_id'] = '';
    data['type'] = '';
    data['availability'] = '';
    data['skills'] = '';
    data['cost_rate'] = '';
    this.resourcesService.getAllResourcesList(data).subscribe((res: any) => {
      if (res) {
        console.log(res);
        this.allResourcesList = res['data'];
        this.totalRecord = res['pagination']['totalItems'];
      }
    });
  }

  addNewResource() {
    const modal = this.modalService.create({
      nzTitle: 'Create Resources',
      nzContent: AddNewResourcesComponent,
      nzFooter: null,
      nzWidth: 800,
      nzClassName: 'create-resources',
    });
  }

  // viewproject(data: any) {
  //     this.dataService.projectData = data;
  //     console.log('', this.dataService.projectData.id);
  //     const modal = this.modalService.create({
  //       nzTitle: 'View Project',
  //       nzContent: ViewProjectComponent,
  //       nzFooter: null,
  //       nzWidth: 800,
  //       nzClassName: 'view-project',
  //     });
  //     modal.componentInstance!.data = data;
  //     modal.afterClose.subscribe((res: any) => {
  //       this.getAllprojects();
  //     });
  //   }

  editResources(data: any, index: any) {
    const modal = this.modalService.create({
      nzTitle: 'Edit Resources',
      nzContent: AddNewResourcesComponent,
      nzFooter: null,
      nzWidth: 800,
      nzClassName: 'create-resources',
    });
    modal.componentInstance!.data = data;
    modal.componentInstance!.index = index;
    modal.afterClose.subscribe((res: any) => {
      this.getAllResourcesList();
    });
  }

  deleteproject(id: any) {
    this.resourcesService.deleteResourceDataByid(id).subscribe((res: any) => {
      if (res) {
        this.getAllResourcesList();
      }
    });
  }

  pageIndexChange(selectedIndex: any) {
    this.currentPageIndex = selectedIndex;
    this.pageNumber = selectedIndex;
    this.getAllResourcesList();
  }
}
