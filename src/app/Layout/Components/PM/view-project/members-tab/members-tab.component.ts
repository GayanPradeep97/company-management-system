import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/_services/pm-services/projects.service';
import { DataService } from 'src/app/_services/shared-data/data.service';

@Component({
  selector: 'app-members-tab',
  templateUrl: './members-tab.component.html',
  styleUrls: ['./members-tab.component.sass'],
})
export class MembersTabComponent {
  memberData: any = [];

  pageNumber: any = 1;
  pageSize: any = 10;
  totalRecord: any;
  currentPageIndex = 1;
  constructor(
    private dataService: DataService,
    private projectService: ProjectsService
  ) {}

  ngOnInit() {
    this.getAllmemersData();
  }

  getAllmemersData() {
    const data: any = [];
    data['skip'] = 0;
    data['limit'] = 10;
    data['search'] = 'gayan';
    data['id'] = this.dataService.projectData.id;
    this.projectService.getALlmembers(data).subscribe((res: any) => {
      if (res) {
        this.memberData = res['data'];
      }
      console.log(this.memberData, 'res');
    });
  }

  addNewRole() {}

  pageIndexChange(data: any) {}
}
