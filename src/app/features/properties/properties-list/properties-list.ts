import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { bookingsData, propertyList } from '../../../utils/constant';

@Component({
  selector: 'app-properties-list',
  imports: [NgxDatatableModule, CommonModule],
  templateUrl: './properties-list.html',
  styleUrl: './properties-list.css',
})
export class PropertiesList {
  data:any = propertyList;
}
