import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodsTableComponent } from './payment-methods-table';

describe('PaymentMethodsTable', () => {
  let component: PaymentMethodsTableComponent;
  let fixture: ComponentFixture<PaymentMethodsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentMethodsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentMethodsTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
