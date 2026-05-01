import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LayoutComponent } from './layout';

describe('Layout', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show sidebar navigation by default', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-sidebar')).toBeTruthy();
    expect(compiled.textContent).toContain('Dashboard');
    expect(compiled.textContent).toContain('Users');
  });

  it('should show route options in the top navbar after toggling layout', () => {
    fixture.detectChanges();
    const toggleButton = fixture.nativeElement.querySelector('.toggle-btn') as HTMLButtonElement;

    toggleButton.click();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-sidebar')).toBeFalsy();
    expect(compiled.querySelector('.top-nav')).toBeTruthy();
    expect(compiled.textContent).toContain('Products');
    expect(compiled.textContent).toContain('Orders');
    expect(compiled.textContent).toContain('Settings');
  });
});
