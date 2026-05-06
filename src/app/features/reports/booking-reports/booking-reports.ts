import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card';
import { NgFor } from '@angular/common';
import { bookingReportsChartOverview, bookingsReportsStats, recentBookingsData, revenueOverview, salesReportsCharts, topSoldProperties } from '../../../utils/constant';
import { RecentBookingTable } from "../../../shared/components/recent-booking-table/recent-booking-table";

@Component({
  selector: 'app-booking-reports',
  imports: [NgxEchartsModule, StatCardComponent, NgFor, RecentBookingTable],
  templateUrl: './booking-reports.html',
  styleUrl: './booking-reports.css',
})
export class BookingReports {
  lastMonth = {
    revenue: 15780,
  };
  currentMonth = {
    revenue: 76221,
    hike: '12%',
  };
  stats = bookingsReportsStats;

  revenueChart = revenueOverview;

  statusChart = bookingReportsChartOverview;

  recentBookingsData = recentBookingsData;
}
