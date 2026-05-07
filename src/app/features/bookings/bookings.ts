import { Component } from '@angular/core';
import { allBookingsData } from '../../utils/constant';
import { AllBookingsTable } from '../../shared/components/all-bookings-table/all-bookings-table';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

interface bookingRow {
  bookingId: string;
  propertyName: string;
  propertyLocation: string;
  propertyImage: string;
  userName: string;
  userAvatar: string;
  status: string;
  bookedOn: string;
  amount: string;
  payment: string;
  clientName: string;
}

interface bookingFilters {
  search: string;
  status: string;
  payment: string;
  city: string;
}
@Component({
  selector: 'app-bookings',
  imports: [AllBookingsTable, FormsModule, NgFor],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings {
  allBookingsData = allBookingsData;

  filteredBookingData: bookingRow[] = [...this.allBookingsData];
  statusOptions = this.getUniqueOptions('status');
  cityOptions = this.getUniqueOptions('propertyLocation');
  paymentOptions = this.getUniqueOptions('payment');

  filters: bookingFilters = {
    search: '',
    status: '',
    city: '',
    payment: '',
  };

  applyFilters() {
    const search = this.normalize(this.filters.search);
    const status = this.normalize(this.filters.status);
    const payment = this.normalize(this.filters.payment);
    const city = this.normalize(this.filters.city);

    this.filteredBookingData = this.allBookingsData.filter((booking) => {
      const searchableText = [
        booking.bookingId,
        booking.propertyName,
        booking.clientName,
        booking.amount,
        booking.status,
        booking.payment,
        booking.propertyName,
        booking.bookedOn,
        booking.userName,
      ]
        .map((value) => this.normalize(value))
        .join(' ');

      return (
        (!search || searchableText.includes(search)) &&
        (!status || this.normalize(booking.status) === status) &&
        (!payment || this.normalize(booking.payment) === payment) &&
        (!city || this.normalize(booking.propertyLocation) === city)
      );
    });
  }

  clearFilters() {
    this.filters = {
      search: '',
      status: '',
      payment: '',
      city: '',
    };
    this.filteredBookingData = [...this.allBookingsData];
  }

  hasActiveFilters() {
    return Object.values(this.filters).some((value) => value.trim());
  }

  private getUniqueOptions(key: keyof Pick<bookingRow, 'status' | 'payment' | 'propertyLocation'>) {
    return Array.from(new Set(this.allBookingsData.map((booking) => booking[key]))).sort();
  }

  private normalize(value: string) {
    return value.trim().toLowerCase();
  }
}
