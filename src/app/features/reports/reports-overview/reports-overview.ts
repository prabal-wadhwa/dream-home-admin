import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card';
import { NgFor } from '@angular/common';
import { bookingCharts, bookingsData, revenueOverview, stats } from '../../../utils/constant';
import { SaleReportsTable } from "../../../shared/components/sale-reports-table/sale-reports-table";

@Component({
  selector: 'app-reports-overview',
  imports: [NgxEchartsModule, StatCardComponent, NgFor, SaleReportsTable],
  templateUrl: './reports-overview.html',
  styleUrl: './reports-overview.css',
})
export class ReportsOverviewComponent {
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
