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

  constructor(
    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const segments = this.router.url.split('/');
        console.log('this.activeSection', segments);
        const urlSegment = segments.length > 2 ? segments[1] : 'projects'; // default fallback
        console.log('this.activeSection', urlSegment);
        this.setSidebarItems(urlSegment);
        this.urlLink = urlSegment;
        this.activeSection = segments.length > 2 ? segments[2] : 'dashboard';
      });
  }
  setSidebarItems(section: string) {
    switch (section) {
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
            id: 'leaveRequests',
            label: 'Leave Requests',
            icon: 'leaveRequests',
          },
          { id: 'perforamance', label: 'Perforamance', icon: 'Perforamance' },
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
          { id: 'deals', label: 'Deals', icon: 'Deals' },
          { id: 'activities', label: 'Activities', icon: 'Activities' },
          { id: 'contracts', label: 'Contracts', icon: 'Contracts' },
          { id: 'contacts', label: 'Contacts', icon: 'Contacts' },
          {
            id: 'communications',
            label: 'Communications',
            icon: 'Communications',
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

  // Users data methods
  // getUserColumns(): Column[] {
  //   return [
  //     { key: 'id', header: 'ID' },
  //     { key: 'name', header: 'Name' },
  //     { key: 'email', header: 'Email' },
  //     { key: 'role', header: 'Role' },
  //     { key: 'status', header: 'Status' },
  //   ];
  // }

  // getUsersData(): any[] {
  //   return [
  //     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  //     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  //     { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  //   ];
  // }

  // getUserActions(): TableAction[] {
  //   return [
  //     { type: 'view', label: 'View', onClick: (row) => this.handleTableAction('view', row) },
  //     { type: 'edit', label: 'Edit', onClick: (row) => this.handleTableAction('edit', row) },
  //     { type: 'delete', label: 'Delete', onClick: (row) => this.handleTableAction('delete', row) },
  //   ];
  // }

  // Products data methods
  // getProductColumns(): Column[] {
  //   return [
  //     { key: 'id', header: 'ID' },
  //     { key: 'name', header: 'Product Name' },
  //     { key: 'category', header: 'Category' },
  //     { key: 'price', header: 'Price' },
  //     { key: 'stock', header: 'Stock' },
  //   ];
  // }

  getProductsData(): any[] {
    return [
      {
        id: 1,
        name: 'Laptop',
        category: 'Electronics',
        price: '$999',
        stock: 50,
      },
      {
        id: 2,
        name: 'Smartphone',
        category: 'Electronics',
        price: '$699',
        stock: 100,
      },
      {
        id: 3,
        name: 'Headphones',
        category: 'Audio',
        price: '$199',
        stock: 75,
      },
    ];
  }

  // getProductActions(): TableAction[] {
  //   return [
  //     { type: 'view', label: 'View', onClick: (row) => this.handleTableAction('view', row) },
  //     { type: 'edit', label: 'Edit', onClick: (row) => this.handleTableAction('edit', row) },
  //     { type: 'delete', label: 'Delete', onClick: (row) => this.handleTableAction('delete', row) },
  //   ];
  // }

  // Orders data methods
  // getOrderColumns(): Column[] {
  //   return [
  //     { key: 'id', header: 'Order ID' },
  //     { key: 'customer', header: 'Customer' },
  //     { key: 'product', header: 'Product' },
  //     { key: 'amount', header: 'Amount' },
  //     { key: 'status', header: 'Status' },
  //   ];
  // }

  getOrdersData(): any[] {
    return [
      {
        id: 1,
        customer: 'Alice Brown',
        product: 'Laptop',
        amount: '$999',
        status: 'Completed',
      },
      {
        id: 2,
        customer: 'Charlie Wilson',
        product: 'Smartphone',
        amount: '$699',
        status: 'Pending',
      },
      {
        id: 3,
        customer: 'Diana Miller',
        product: 'Headphones',
        amount: '$199',
        status: 'Shipped',
      },
    ];
  }

  // getOrderActions(): TableAction[] {
  //   return [
  //     { type: 'view', label: 'View', onClick: (row) => this.handleTableAction('view', row) },
  //     { type: 'edit', label: 'Edit', onClick: (row) => this.handleTableAction('edit', row) },
  //   ];
  // }

  private handleTableAction(action: string, row: any) {
    console.log(`${action} action for:`, row);
  }
}
