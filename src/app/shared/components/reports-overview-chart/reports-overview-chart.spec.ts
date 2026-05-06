import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsOverviewChart } from './reports-overview-chart';

describe('ReportsOverviewChart', () => {
  let component: ReportsOverviewChart;
  let fixture: ComponentFixture<ReportsOverviewChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsOverviewChart],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsOverviewChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
