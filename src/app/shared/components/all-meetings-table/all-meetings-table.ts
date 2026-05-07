import { NgClass } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-all-meetings-table',
  imports: [NgxDatatableModule, NgClass],
  templateUrl: './all-meetings-table.html',
  styleUrl: './all-meetings-table.css',
})
export class AllMeetingsTable {
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
