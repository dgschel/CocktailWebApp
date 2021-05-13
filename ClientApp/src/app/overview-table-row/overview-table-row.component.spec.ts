import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTableRowComponent } from './overview-table-row.component';

describe('OverviewTableRowComponent', () => {
  let component: OverviewTableRowComponent;
  let fixture: ComponentFixture<OverviewTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
