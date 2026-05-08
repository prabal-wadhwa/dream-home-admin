import { Component } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { paymentDetailsData } from '../../../utils/constant';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [CommonModule, NgClass, NgFor],
  templateUrl: './payment-detail.html',
  styleUrls: ['./payment-detail.css'],
})
export class PaymentDetail {
  paymentData = paymentDetailsData;
}
