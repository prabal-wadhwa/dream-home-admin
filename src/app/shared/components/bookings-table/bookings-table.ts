import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-bookings-table',
  standalone: true,
  imports: [NgxDatatableModule, NgClass],
  templateUrl: './bookings-table.html',
  styleUrls: ['./bookings-table.css'],
})
export class BookingTable {
  @Input() data: any[] = [];
  @ViewChild(DatatableComponent) table!: DatatableComponent;

  @HostListener('window:resize')
  onResize() {
    this.table?.recalculate();
  }

  recalculateTable() {
    setTimeout(() => {
      this.table?.recalculate();
    }, 100);
  }
  pageSize = 5;
  pageNumber = 0;

  onPage(event: any) {
    this.pageNumber = event.offset;
  }
}
