import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverviewTableColumnComponent } from './overview-table-column.component';

describe('OverviewTableColumnComponent', () => {
  let component: OverviewTableColumnComponent;
  let fixture: ComponentFixture<OverviewTableColumnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewTableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
