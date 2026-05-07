import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [NgxDatatableModule, CommonModule, FormsModule, MatIconModule],
  templateUrl: './datatable.html',
  styleUrl: './datatable.css',
})
export class Datatable {
  @Input() rows: any[] = [];
  @Input() columns: any[] = [];
  @Input() isEditing: boolean = false;
  @Input() tableName: string = '';

  apiUrl = 'http://localhost:3000/';

  onActivate(event: any) {
    console.log('Activated Event', event);
  }

  onSettingsClick(row: any, rowIndex: number) {
    console.log('Settings Clicked', row, rowIndex);
  }

  onDeleteClick(row: any, rowIndex: number) {
    console.log('Delete Clicked', row, rowIndex);

    this.rows.splice(rowIndex, 1);
    this.rows = [...this.rows];
  }

  onFileChange(event: any, row: any, prop: string) {
    const file = event.target.files[0];

    if (file) {
      row[prop] = file;

      const reader = new FileReader();

      reader.onload = () => {
        row.preview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  onCancel(row: any, prop: string) {
    row[prop] = null;
    row.preview = null;
  }
}
