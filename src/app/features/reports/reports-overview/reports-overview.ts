import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card';
import { NgFor } from '@angular/common';
import {
  reportOverviewStats,
  reportOverviewTableStats,
  reportsOverviewChartOptions,
  reportsOverviewMonthlySummaryData,
  reportsOverviewPieChartData,
} from '../../../utils/constant';
import { ReportsOverviewChart } from '../../../shared/components/reports-overview-chart/reports-overview-chart';
import { ReportsMonthlySummaryTable } from '../../../shared/components/reports-monthly-summary-table/reports-monthly-summary-table';
@Component({
  selector: 'app-reports-overview',
  imports: [
    NgxEchartsModule,
    StatCardComponent,
    NgFor,
    ReportsOverviewChart,
    ReportsMonthlySummaryTable,
  ],
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
  stats = reportOverviewStats;

  statusChart = reportsOverviewPieChartData;

  overviewStats = reportOverviewTableStats;

  overviewChartOptions = reportsOverviewChartOptions;

  monthlySummaryData = reportsOverviewMonthlySummaryData;
}
