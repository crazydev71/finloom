import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlmTableComponent } from './flm-table.component';

describe('FlmTableComponent', () => {
  let component: FlmTableComponent;
  let fixture: ComponentFixture<FlmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlmTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
