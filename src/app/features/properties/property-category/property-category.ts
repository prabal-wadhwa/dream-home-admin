import { Component } from '@angular/core';
import { BookingTable } from '../../../shared/components/bookings-table/bookings-table';
import { bookingsData, propertyCategories } from '../../../utils/constant';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-category',
  imports: [ NgxDatatableModule, CommonModule],
  templateUrl: './property-category.html',
  styleUrl: './property-category.css',
})
export class PropertyCategory {
  data :any = propertyCategories;
}

