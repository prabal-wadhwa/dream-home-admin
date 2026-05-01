import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { SidebarComponent } from '../sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, RouterOutlet, SidebarComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent implements OnInit {
  private readonly mobileBreakpoint = 800;

  isHorizontal = false;
  isMobile = false;
  isMobileSidebarOpen = false;

  ngOnInit() {
    this.updateViewportMode();
  }

  @HostListener('window:resize')
  updateViewportMode() {
    this.isMobile = window.innerWidth <= this.mobileBreakpoint;

    if (this.isMobile) {
      this.isHorizontal = false;
    } else {
      this.isMobileSidebarOpen = false;
    }
  }

  toggleLayout() {
    if (this.isMobile) {
      return;
    }

    this.isHorizontal = !this.isHorizontal;

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }

  toggleMobileSidebar() {
    this.updateViewportMode();
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }

  closeMobileSidebar() {
    this.isMobileSidebarOpen = false;
  }
}
