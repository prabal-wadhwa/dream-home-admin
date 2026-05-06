import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsOverviewComponent } from './reports-overview';

describe('ReportsOverview', () => {
  let component: ReportsOverviewComponent;
  let fixture: ComponentFixture<ReportsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsOverviewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
