import { AfterContentInit, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatColumnDef } from '@angular/material/table';

@Component({
  selector: 'app-overview-table-column',
  templateUrl: './overview-table-column.component.html',
  styleUrls: ['./overview-table-column.component.css']
})
export class OverviewTableColumnComponent implements AfterContentInit
{
  // @Input() column: string;
  // @ViewChild(TemplateRef, { static: true }) columnDef: TemplateRef<any>

  constructor() { }

  ngAfterContentInit(): void
  {
    // console.log(this.columnDef)
  }

}
