import { Component } from '@angular/core';
import { PaymentMethodsTableComponent } from "../../../shared/components/payment-methods-table/payment-methods-table";

@Component({
  selector: 'app-payment-method',
  imports: [PaymentMethodsTableComponent],
  templateUrl: './payment-method.html',
  styleUrl: './payment-method.css',
})
export class PaymentMethod {}
