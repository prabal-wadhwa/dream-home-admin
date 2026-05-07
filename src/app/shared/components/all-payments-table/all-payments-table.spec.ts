import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPaymentsTable } from './all-payments-table';

describe('AllPaymentsTable', () => {
  let component: AllPaymentsTable;
  let fixture: ComponentFixture<AllPaymentsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPaymentsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(AllPaymentsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
