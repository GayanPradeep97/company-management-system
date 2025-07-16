import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonsService } from 'src/app/_services/commons.service';
import { DataService } from 'src/app/_services/shared-data/data.service';
import { TokenserviceService } from 'src/app/_services/tokenservice.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.sass'],
})
export class TopNavigationComponent {
  @Input() userEmail: string = '';
  @Output() logout = new EventEmitter<void>();
  @Output() profileClick = new EventEmitter<void>();
  @Output() settingsClick = new EventEmitter<void>();

  isDropdownOpen = false;
  currentUser: any;
  loggeduser: any;

  constructor(
    private commonService: CommonsService,
    private tokenService: TokenserviceService,
    private router: Router,
    private dataService: DataService
  ) {
    this.currentUser = this.commonService.parseJwt(tokenService.getToken());
    this.loggeduser = this.currentUser.sub;
  }

  getInitials(email: string): string {
    return email.split('@')[0].slice(0, 2).toUpperCase();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onProfileClick() {
    this.profileClick.emit();
    this.isDropdownOpen = false;
  }

  onSettingsClick() {
    this.settingsClick.emit();
    this.isDropdownOpen = false;
  }

  onLogout() {
    this.logout.emit();
    this.isDropdownOpen = false;
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }
}
