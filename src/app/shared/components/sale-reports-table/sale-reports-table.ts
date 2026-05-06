import { NgClass } from '@angular/common';
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-sale-reports-table',
  standalone: true,
  imports: [NgxDatatableModule, NgClass],
  templateUrl: './sale-reports-table.html',
  styleUrls: ['./sale-reports-table.css'],
})
export class SaleReportsTable {
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
