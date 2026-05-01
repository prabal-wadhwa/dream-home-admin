import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card';
import { bookingCharts, bookingsData, revenueOverview, stats } from '../../utils/constant';
import { BookingTable } from '../../shared/components/bookings-table/bookings-table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgxEchartsModule, StatCardComponent, BookingTable],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent {
  lastMonth = {
    revenue: 15780,
  };
  currentMonth = {
    revenue: 76221,
    hike: '12%',
  };
  stats = stats;

  revenueChart = revenueOverview;

  statusChart = bookingCharts;

  bookingsData = bookingsData;
}
