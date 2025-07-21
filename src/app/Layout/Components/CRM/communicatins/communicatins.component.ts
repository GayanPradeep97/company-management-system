import { Component } from '@angular/core';

@Component({
  selector: 'app-communicatins',
  templateUrl: './communicatins.component.html',
  styleUrls: ['./communicatins.component.sass'],
})
export class CommunicatinsComponent {
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
