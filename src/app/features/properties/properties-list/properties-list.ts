import { Component } from '@angular/core';
import {  propertyList } from '../../../utils/constant';

@Component({
  selector: 'app-properties-list',
  imports: [],
  templateUrl: './properties-list.html',
  styleUrl: './properties-list.css',
})
export class PropertiesList {
  data:any = propertyList;
}
