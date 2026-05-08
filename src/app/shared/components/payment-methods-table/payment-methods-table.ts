// payment-methods-table.ts

import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-payment-methods-table',
  standalone: true,
  imports: [CommonModule, NgxDatatableModule, NgClass],
  templateUrl: './payment-methods-table.html',
  styleUrls: ['./payment-methods-table.css'],
})
export class PaymentMethodsTableComponent {
  pageSize = 6;
  pageNumber = 0;

  rows = [
    {
      method: 'Visa',
      image: '/icons/visa.png',
      details: 'Visa Ending in 4244',
      subDetails: 'Expires in 12/30',
      type: 'Credit Card',
      status: 'Active',
      enabled: true,
    },
    {
      method: 'Mastercard',
      image: '/icons/mastercard.png',
      details: 'Mastercard ending in 5544',
      subDetails: 'Expires in 11/30',
      type: 'Credit Card',
      status: 'Active',
      enabled: true,
    },
    {
      method: 'Bank',
      image: '/icons/bank.png',
      details: 'ACHS Bank Transfer',
      subDetails: '**** **** **4541',
      type: 'Bank Account',
      status: 'Active',
      enabled: true,
    },
    {
      method: 'Paypal',
      image: '/icons/paypal.png',
      details: 'PayPal',
      subDetails: 'admin@example.com',
      type: 'E-Wallet',
      status: 'Active',
      enabled: true,
    },
    {
      method: 'Stripe',
      image: '/icons/Stripe.png',
      details: 'Stripe Gateway',
      subDetails: 'Connected account',
      type: 'Payment Gateway',
      status: 'Inactive',
      enabled: false,
    },
  ];

  onPage(event: any) {
    this.pageNumber = event.offset;
  }

  toggleStatus(row: any) {
    row.enabled = !row.enabled;
    row.status = row.enabled ? 'Active' : 'Inactive';
  }
}