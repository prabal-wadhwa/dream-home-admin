import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [NgIf],
})
export class HeaderComponent {
  @Input() isHorizontal = false;
  @Output() toggle = new EventEmitter<void>();

  pageTitle = 'Dashboard';
  user = 'Admin';
  notification = 2;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.updateTitle());

    this.updateTitle();
  }

  toggleLayout() {
    this.toggle.emit();
  }

  updateTitle() {
    const url = this.router.url.split('/')[1];

    const map: any = {
      dashboard: 'Dashboard',
      users: 'Users',
      properties: 'Properties',
      reports: 'Reports',
      bookings: 'Bookings',
      enquiries: 'Enquiries',
      messages: 'Messages',
      payments: 'Payments',
    };

    this.pageTitle = map[url] || 'Dashboard';
  }

  @Output() menuToggle = new EventEmitter<void>();

  toggleMobileSidebar() {
    this.menuToggle.emit();
  }
}
