import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-property',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-property.html',
  styleUrl: './add-new-property.css',
})
export class AddNewProperty {
  isSubmitted:boolean=false;
  propertyData:any=
    {
      title: null,
      type: null,
      category: null,
      price:null,
      location:null,
      city: null,
      description: null,
      bedrooms: null,
      bathrooms: null,
      area: null,
      yearBuilt: null,
      garages: null,
    }

    onSave(){
      this.isSubmitted=true;
      const isValid = Object.values(this.propertyData).every(
      value => value !== null && value !== ''
      );
      if(isValid){
        console.log('Property Data:', this.propertyData);
      }
      }
}
