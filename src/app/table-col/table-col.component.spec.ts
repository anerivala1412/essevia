import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColComponent } from './table-col.component';

describe('TableColComponent', () => {
  let component: TableColComponent;
  let fixture: ComponentFixture<TableColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
