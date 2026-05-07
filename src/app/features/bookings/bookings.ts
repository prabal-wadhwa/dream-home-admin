import { Component } from '@angular/core';
import { allBookingsData } from '../../utils/constant';
import { AllBookingsTable } from '../../shared/components/all-bookings-table/all-bookings-table';

@Component({
  selector: 'app-bookings',
  imports: [AllBookingsTable],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings {
  allBookingsData = allBookingsData;
}
