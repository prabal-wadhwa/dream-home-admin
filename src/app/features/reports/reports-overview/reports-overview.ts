import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { reportsOverviewMonthlySummaryData } from '../../../utils/constant';
import { ReportsMonthlySummaryTable } from '../../../shared/components/reports-monthly-summary-table/reports-monthly-summary-table';
@Component({
  selector: 'app-reports-overview',
  imports: [NgxEchartsModule, ReportsMonthlySummaryTable],
  templateUrl: './reports-overview.html',
  styleUrl: './reports-overview.css',
})
export class ReportsOverviewComponent {
  monthlySummaryData = reportsOverviewMonthlySummaryData;
}
