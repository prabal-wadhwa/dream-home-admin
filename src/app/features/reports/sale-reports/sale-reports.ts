import { Component } from '@angular/core';
import { topSoldProperties } from '../../../utils/constant';
import { NgxEchartsModule } from 'ngx-echarts';
import { SaleReportsTable } from '../../../shared/components/sale-reports-table/sale-reports-table';

@Component({
  selector: 'app-sale-reports',
  imports: [NgxEchartsModule, SaleReportsTable],
  templateUrl: './sale-reports.html',
  styleUrl: './sale-reports.css',
})
export class SaleReportsComponent {
  topSoldProperties = topSoldProperties;
}
