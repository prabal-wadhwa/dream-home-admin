import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-reports-overview-chart',
  imports: [NgxEchartsModule, NgFor],
  templateUrl: './reports-overview-chart.html',
  styleUrl: './reports-overview-chart.css',
})
export class ReportsOverviewChart {
  @Input() title = 'Overview';

  @Input() stats: any[] = [];

  @Input() chartOptions: any;
}
