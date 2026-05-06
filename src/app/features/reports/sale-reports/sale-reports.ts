import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  revenueOverview,
  salesReportsCharts,
  salesReportStats,
  topSoldProperties,
} from '../../../utils/constant';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card';
import { SaleReportsTable } from '../../../shared/components/sale-reports-table/sale-reports-table';

@Component({
  selector: 'app-sale-reports',
  imports: [NgxEchartsModule, StatCardComponent, NgFor, SaleReportsTable],
  templateUrl: './sale-reports.html',
  styleUrl: './sale-reports.css',
})
export class SaleReportsComponent {
  lastMonth = {
    revenue: 15780,
  };
  currentMonth = {
    revenue: 76221,
    hike: '12%',
  };
  stats = salesReportStats;

  revenueChart = revenueOverview;

  statusChart = salesReportsCharts;

  topSoldProperties = topSoldProperties;
}
