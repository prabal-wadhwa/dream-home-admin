import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SidebarComponent } from './sidebar';

describe('Sidebar', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the primary route options', () => {
    fixture.detectChanges();

    const labels = Array.from(
      fixture.nativeElement.querySelectorAll('.nav-links a span:last-child') as NodeListOf<HTMLElement>,
    ).map((label) => label.textContent?.trim());

    expect(labels).toEqual([
      'Dashboard',
      'Users',
      'Products',
      'Orders',
      'Settings',
    ]);
  });
});
