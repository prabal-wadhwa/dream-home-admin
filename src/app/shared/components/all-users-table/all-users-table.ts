import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [NgxDatatableModule, NgClass],
  templateUrl: './all-users-table.html',
  styleUrls: ['./all-users-table.css'],
})
export class UsersTableComponent implements OnChanges {
  @Input() rows: any[] = [];

  pageSize = 6;
  pageNumber = 0;

  selected: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rows']) {
      this.pageNumber = 0;
      this.selected = this.selected.filter((selectedRow) =>
        this.rows.some((row) => row.id === selectedRow.id),
      );
    }
  }

  onPage(event: any) {
    this.pageNumber = event.offset;
  }

  toggleAll(event: any) {
    this.selected = event.target.checked ? [...this.rows] : [];
  }

  toggleRow(row: any, event: any) {
    if (event.target.checked) {
      this.selected = [...this.selected, row];
    } else {
      this.selected = this.selected.filter((r) => r.id !== row.id);
    }
  }

  isSelected(row: any) {
    return this.selected.some((r) => r.id === row.id);
  }

  isAllSelected() {
    return this.rows.length > 0 && this.selected.length === this.rows.length;
  }
}
