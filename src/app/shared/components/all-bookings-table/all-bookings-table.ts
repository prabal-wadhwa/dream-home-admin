import { NgClass } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-all-bookings-table',
  imports: [NgxDatatableModule, NgClass],
  templateUrl: './all-bookings-table.html',
  styleUrl: './all-bookings-table.css',
})
export class AllBookingsTable {
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
}
