import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { allPaymentsData } from '../../../utils/constant';
import { AllPaymentsTable } from '../../../shared/components/all-payments-table/all-payments-table';

interface paymentRow {
  paymentId: string;
  propertyName: string;
  propertyLocation: string;
  propertyImage: string;
  status: string;
  bookedOn: string;
  type: string;
  clientName: string;
  clientEmail: string;
  clientPhoneNumber: string;
  amount: string;
  paymentMethod: string;
  account: string;
  paymentType: string;
}

interface paymentFilters {
  search: string;
  status: string;
  paymentType: string;
  city: string;
}
@Component({
  selector: 'app-payment-list',
  imports: [FormsModule, NgFor, AllPaymentsTable],
  templateUrl: './payment-list.html',
  styleUrl: './payment-list.css',
})
export class PaymentList {
  allPaymentsData = allPaymentsData;

  filteredPaymentData: paymentRow[] = [...this.allPaymentsData];
  statusOptions = this.getUniqueOptions('status');
  cityOptions = this.getUniqueOptions('propertyLocation');
  paymentTypeOptions = this.getUniqueOptions('paymentType');

  filters: paymentFilters = {
    search: '',
    status: '',
    city: '',
    paymentType: '',
  };

  applyFilters() {
    const search = this.normalize(this.filters.search);
    const status = this.normalize(this.filters.status);
    const city = this.normalize(this.filters.city);
    const paymentType = this.normalize(this.filters.paymentType);

    this.filteredPaymentData = this.allPaymentsData.filter((payment) => {
      const searchableText = [
        payment.paymentId,
        payment.propertyName,
        payment.clientName,
        payment.bookedOn,
        payment.status,
        payment.type,
        payment.propertyName,
        payment.bookedOn,
        payment.clientEmail,
      ]
        .map((value) => this.normalize(value))
        .join(' ');

      return (
        (!search || searchableText.includes(search)) &&
        (!status || this.normalize(payment.status) === status) &&
        (!paymentType || this.normalize(payment.paymentType) === paymentType) &&
        (!city || this.normalize(payment.propertyLocation) === city)
      );
    });
  }

  clearFilters() {
    this.filters = {
      search: '',
      status: '',
      paymentType: '',
      city: '',
    };
    this.filteredPaymentData = [...this.allPaymentsData];
  }

  hasActiveFilters() {
    return Object.values(this.filters).some((value) => value.trim());
  }

  private getUniqueOptions(
    key: keyof Pick<paymentRow, 'status' | 'propertyLocation' | 'paymentType'>,
  ) {
    return Array.from(new Set(this.allPaymentsData.map((payment) => payment[key]))).sort();
  }

  private normalize(value: string) {
    return value.trim().toLowerCase();
  }
}
