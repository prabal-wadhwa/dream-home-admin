import { Component } from '@angular/core';
import { recentPaymentsData } from '../../../utils/constant';
import { RecentPaymentsTable } from "../../../shared/components/recent-payments-table/recent-payments-table";

@Component({
  selector: 'app-payment-reports',
  imports: [ RecentPaymentsTable],
  templateUrl: './payment-reports.html',
  styleUrl: './payment-reports.css',
})
export class PaymentReports {
  recentPaymentsData = recentPaymentsData;
}
