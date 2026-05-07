import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { recentBookingsData } from '../../../utils/constant';
import { RecentBookingTable } from '../../../shared/components/recent-booking-table/recent-booking-table';

@Component({
  selector: 'app-booking-reports',
  imports: [NgxEchartsModule, RecentBookingTable],
  templateUrl: './booking-reports.html',
  styleUrl: './booking-reports.css',
})
export class BookingReports {
  recentBookingsData = recentBookingsData;
}
