import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DataService } from 'src/app/_services/shared-data/data.service';

@Component({
  selector: 'app-dev-flow',
  templateUrl: './dev-flow.component.html',
  styleUrls: ['./dev-flow.component.sass'],
})
export class DevFlowComponent {
  @Input() userEmail: string | null = '';
  @Output() logout = new EventEmitter<void>();

  managementType = 'admin';
  activeSection = 'dashboard';
  sidebarItems: any = [];
  urlLink: any;
  mainSegments: any;

  constructor(
    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const segments = this.router.url.split('/');
        this.mainSegments = this.router.url.split('/').slice(1);

        console.log('this.activeSection', segments);
        const urlSegment =
          segments.length === 2 || segments.length > 2
            ? segments[1]
            : 'projects'; // default fallback
        console.log('this.activeSection', urlSegment);
        this.setSidebarItems(urlSegment);
        this.urlLink = urlSegment;
        this.activeSection = segments.length > 2 ? segments[2] : 'dashboard';
      });
  }
  setSidebarItems(section: string) {
    switch (section) {
      case 'devflow':
        this.sidebarItems = [];
        break;
      case 'projects':
        this.sidebarItems = [
          { id: 'dashboard', label: 'Dashboard', icon: 'home' },
          { id: 'projects', label: 'Projects', icon: 'Projects' },
          { id: 'tasks', label: 'Tasks', icon: 'Tasks' },
          { id: 'resources', label: 'Resources', icon: 'Resources' },
          { id: 'issues', label: 'Issues', icon: 'Issues' },
          { id: 'timeline', label: 'Timeline', icon: 'Timeline' },
          { id: 'team', label: 'Team', icon: 'Team' },
          { id: 'testcases', label: 'Test Cases', icon: 'Testcases' },
          { id: 'reports', label: 'Reports', icon: 'Reports' },
        ];
        break;
      case 'hr':
        this.sidebarItems = [
          { id: 'dashboard', label: 'Dashboard', icon: 'home' },
          { id: 'employees', label: 'Employees', icon: 'employees' },
          { id: 'departments', label: 'Departments', icon: 'Departments' },
          { id: 'positions', label: 'Positions', icon: 'Positions' },
          {
            id: 'leaves',
            label: 'leaves',
            icon: 'leaves',
          },
          { id: 'performance', label: 'performance', icon: 'performance' },
          { id: 'interview', label: 'interview', icon: 'interview' },
        ];
        break;
      case 'finance':
        this.sidebarItems = [
          { id: 'dashboard', label: 'Dashboard', icon: 'home' },
          { id: 'accounts', label: 'Accounts', icon: 'Accounts' },
          { id: 'budgets', label: 'Budgets', icon: 'Budgets' },
          { id: 'expenses', label: 'Expenses', icon: 'Expenses' },
          { id: 'invoices', label: 'Invoices', icon: 'Invoices' },
          { id: 'reports', label: 'Reports', icon: 'Reports' },
        ];
        break;
      case 'crm':
        this.sidebarItems = [
          { id: 'dashboard', label: 'Dashboard', icon: 'home' },
          { id: 'companies', label: 'Companies', icon: 'Companies' },

          { id: 'activities', label: 'Activities', icon: 'Activities' },
          { id: 'contracts', label: 'Contracts', icon: 'Contracts' },
          { id: 'contacts', label: 'Contacts', icon: 'Contacts' },
          {
            id: 'communications',
            label: 'Communications',
            icon: 'Communications',
          },
          {
            id: 'perposals',
            label: 'Perposals',
            icon: 'perposals',
          },
          {
            id: 'deals',
            label: 'Deals',
            icon: 'deals',
          },
        ];
        break;
      default:
        this.sidebarItems = [];
    }
  }

  ngOninit() {}

  onSectionChange(section: string) {
    this.activeSection = section;
    if (this.urlLink === 'projects') {
      switch (section) {
        case 'dashboard':
          this.router.navigate(['/projects']);
          break;
        case 'projects':
          this.router.navigate(['/projects/projects']);
          break;
        case 'tasks':
          this.router.navigate(['/projects/tasks']);
          break;
        case 'issues':
          this.router.navigate(['/projects/issues']);
          break;
        case 'resources':
          this.router.navigate(['/projects/resources']);
          break;
        case 'timeline':
          this.router.navigate(['/projects/timeline']);
          break;
        case 'team':
          this.router.navigate(['/projects/team']);
          break;
        case 'testcases':
          this.router.navigate(['/projects/testcases']);
          break;
        case 'reports':
          this.router.navigate(['/projects/reports']);
          break;
      }
    } else if (this.urlLink === 'hr') {
      switch (section) {
        case 'dashboard':
          this.router.navigate(['/hr']);
          break;
        case 'employees':
          this.router.navigate(['/hr/employees']);
          break;
        case 'departments':
          this.router.navigate(['/hr/departments']);
          break;
        case 'positions':
          this.router.navigate(['/hr/positions']);
          break;
        case 'leaves':
          this.router.navigate(['/hr/leaves']);
          break;
        case 'performance':
          this.router.navigate(['/hr/performance']);
          break;
        case 'interview':
          this.router.navigate(['/hr/interview']);
          break;
        case 'testcases':
          this.router.navigate(['/projects/testcases']);
          break;
        case 'reports':
          this.router.navigate(['/projects/reports']);
          break;
      }
    } else if (this.urlLink === 'crm') {
      switch (section) {
        case 'dashboard':
          this.router.navigate(['/crm']);
          break;
        case 'companies':
          this.router.navigate(['/crm/companies']);
          break;
        case 'activities':
          this.router.navigate(['/crm/activities']);
          break;
        case 'contracts':
          this.router.navigate(['/crm/contracts']);
          break;
        case 'contacts':
          this.router.navigate(['/crm/contacts']);
          break;
        case 'communications':
          this.router.navigate(['/crm/communications']);
          break;
        case 'perposals':
          this.router.navigate(['/crm/perposals']);
          break;
        case 'deals':
          this.router.navigate(['/crm/deals']);
          break;
      }
    }
    switch (section) {
      case 'hr':
        this.router.navigate(['/hr']);
        break;
      case 'finance':
        this.router.navigate(['/finance']);
        break;
      case 'project':
        this.router.navigate(['/projects']);
        break;
      case 'crm':
        this.router.navigate(['/crm']);
        break;
    }
  }

  onLogout() {
    this.logout.emit();
  }

  onProfileClick() {
    console.log('Profile clicked');
  }

  onSettingsClick() {
    this.activeSection = 'settings';
  }

  private handleTableAction(action: string, row: any) {
    console.log(`${action} action for:`, row);
  }
}
