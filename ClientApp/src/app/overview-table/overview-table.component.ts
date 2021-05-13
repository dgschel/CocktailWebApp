import { AfterContentInit, Component, ContentChild, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { OverviewTableColumnComponent } from '../overview-table-column/overview-table-column.component';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.css']
})
export class OverviewTableComponent<T> implements AfterContentInit
{
  @Input() diplayColumns: string[] = [];
  @Input() data: T[] | Promise<T[]>;
  @ViewChild(MatTable, { static: true }) table: MatTable<T>;
  // @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;
  @ContentChildren(OverviewTableColumnComponent) columnDefs: QueryList<OverviewTableColumnComponent>;
  loading: boolean = false;

  @ContentChild(OverviewTableColumnComponent, { static: true }) column: OverviewTableColumnComponent;

  constructor() { }

  ngAfterContentInit()
  {
    console.log(this.column)
    // console.log(this.table)
    // console.log(this.columnDefs);

    // this.columnDefs.forEach(columnDef => console.log(columnDef.columnDef))
  }

}
