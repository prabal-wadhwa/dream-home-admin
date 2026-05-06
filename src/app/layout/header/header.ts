import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [NgIf, NgFor],
})
export class HeaderComponent {
  @Input() isHorizontal = false;
  @Input() isMobile = false;
  @Output() toggle = new EventEmitter<void>();

  breadcrumb: string[] = [];

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
    const segments = this.router.url.split('/').filter(Boolean);

    const map: any = {
      dashboard: 'Dashboard',
      users: 'Users',
      properties: 'Properties',
      'all-properties': 'All Properties',
      'sale-reports':"Sale Reports",
      reports: 'Reports',
      bookings: 'Bookings',
      enquiries: 'Enquiries',
      messages: 'Messages',
      payments: 'Payments',
      settings: 'Settings',
      'add-new': 'Add New Property',
      "booking-reports":"Booking Reports",
    };

    this.breadcrumb = segments.map((seg: string) => map[seg] || seg);

    this.pageTitle = this.breadcrumb[1];
  }

  @Output() menuToggle = new EventEmitter<void>();

  toggleMobileSidebar() {
    this.menuToggle.emit();
  }
}
