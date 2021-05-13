import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-table-row',
  templateUrl: './overview-table-row.component.html',
  styleUrls: ['./overview-table-row.component.css']
})
export class OverviewTableRowComponent implements OnInit
{
  @Input() row;

  constructor() { }

  ngOnInit()
  {
    console.log(this.row)
  }

}
