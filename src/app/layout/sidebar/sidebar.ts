import { NgFor, NgIf, NgStyle } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../core/services/auth';
import { menuList } from '../../utils/constant';

interface MenuItem {
  name: string;
  icon: string;
  route?: string;
  expanded?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class SidebarComponent implements OnInit {
  @Input() isHorizontal = false;
  @Input() isMobileOpen = false;
  @Input() isMobileWidth = false
  @Output() mobileClose = new EventEmitter<void>();

  animateEntry = false;
  horizontalDropdownStyle: Record<string, string> = {};

  navItems: MenuItem[] = menuList;
  user = 'Admin';
  notification = 2;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.auth.consumeSidebarEntryAnimation()) {
      this.animateEntry = true;
      setTimeout(() => (this.animateEntry = false), 900);
    }

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.expandActiveMenus());

    this.expandActiveMenus();
  }

  scrollToItem(index: number) {
    const el = this.navItemRefs.get(index)?.nativeElement;
    const container = el?.closest('.nav-scroll');

    if (!el || !container) return;

    const elTop = el.offsetTop;
    const elBottom = elTop + el.offsetHeight;

    const viewTop = container.scrollTop;
    const viewBottom = viewTop + container.clientHeight;

    if (elTop < viewTop || elBottom > viewBottom) {
      container.scrollTo({
        top: elTop - 100,
        behavior: 'smooth',
      });
    }
  }

  onItemClick(item: MenuItem, event: MouseEvent, index?: number) {
    event.stopPropagation();

    if (item.children) {
      this.navItems.forEach((i) => {
        if (i !== item) i.expanded = false;
      });

      item.expanded = !item.expanded;

      if (item.expanded) {
        setTimeout(() => {
          this.scrollToItem(index!);
        }, 50); // wait for DOM render
      }

      if (this.isHorizontal && item.expanded) {
        this.positionHorizontalDropdown(event.currentTarget as HTMLElement);
      }
    } else if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  onSubmenuClick(event: MouseEvent) {
    // event.stopPropagation();

    // if (this.isHorizontal) {
    //   this.navItems.forEach((item) => (item.expanded = false));
    // }
  }

  private expandActiveMenus() {
    const currentUrl = this.router.url;

    this.navItems.forEach((item) => {
      if (item.children) {
        item.expanded = item.children.some(
          (child) => child.route && currentUrl.startsWith(child.route),
        );
      }
    });
  }

  @HostListener('document:click', ['$event'])
  closeAll(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target.closest('.nav-item')) {
      // this.navItems.forEach((item) => (item.expanded = false));
    }

    if (!target.closest('.setting-wrapper')) {
      this.isSettingsOpen = false;
    }
  }

  @HostListener('window:resize')
  closeHorizontalDropdown() {
    if (this.isHorizontal) {
      // this.navItems.forEach((item) => (item.expanded = false));
    }
  }

  @ViewChildren('navItem') navItemRefs!: QueryList<ElementRef>;

  private positionHorizontalDropdown(parent: HTMLElement) {
    const rect = parent.getBoundingClientRect();
    const left = Math.min(rect.left, window.innerWidth - 220);

    this.horizontalDropdownStyle = {
      top: `${rect.bottom + 8}px`,
      left: `${Math.max(12, left)}px`,
    };
  }

  isSettingsOpen = false;

  toggleSettings(event: MouseEvent) {
    event.stopPropagation();
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  onSettingClick(type: string) {
    console.log('clicked:', type);
    this.isSettingsOpen = false;
  }

  @Output() toggleLayout = new EventEmitter<void>();

  onToggleLayout() {
    this.toggleLayout.emit();
    this.isSettingsOpen = false;
  }

  toggleMobileSidebar() {
    this.isMobileOpen = !this.isMobileOpen;
  }

  closeMobileSidebar() {
    this.isMobileOpen = false;
    this.mobileClose.emit();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
