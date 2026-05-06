import { NgClass } from '@angular/common';
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-reports-monthly-summary-table',
  imports: [NgxDatatableModule, NgClass],
  templateUrl: './reports-monthly-summary-table.html',
  styleUrl: './reports-monthly-summary-table.css',
})
export class ReportsMonthlySummaryTable {
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
