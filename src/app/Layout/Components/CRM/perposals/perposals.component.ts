import { Component } from '@angular/core';

@Component({
  selector: 'app-perposals',
  templateUrl: './perposals.component.html',
  styleUrls: ['./perposals.component.sass'],
})
export class PerposalsComponent {
  allprojects: any;

  pageNumber: any = 1;
  pageSize: any = 10;
  totalRecord: any;
  currentPageIndex = 1;

  pageIndexChange(selectedIndex: any) {
    this.currentPageIndex = selectedIndex;
    this.pageNumber = selectedIndex;
    // this.getAllprojects();
  }
}
