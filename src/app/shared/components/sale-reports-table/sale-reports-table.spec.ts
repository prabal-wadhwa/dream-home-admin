import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleReportsTable } from './sale-reports-table';

describe('SaleReportsTable', () => {
  let component: SaleReportsTable;
  let fixture: ComponentFixture<SaleReportsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleReportsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(SaleReportsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
