import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { propertyFeature } from '../../../utils/constant';

@Component({
  selector: 'app-property-feature',
  imports: [NgxDatatableModule, CommonModule],
  templateUrl: './property-feature.html',
  styleUrl: './property-feature.css',
})
export class PropertyFeature {
  data:any = propertyFeature;
}
