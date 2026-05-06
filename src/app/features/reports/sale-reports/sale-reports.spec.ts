import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleReportsComponent } from './sale-reports';

describe('SaleReports', () => {
  let component: SaleReportsComponent;
  let fixture: ComponentFixture<SaleReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleReportsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaleReportsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
