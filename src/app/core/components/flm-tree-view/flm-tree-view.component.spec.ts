import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlmTreeViewComponent } from './flm-tree-view.component';

describe('FlmTreeViewComponent', () => {
  let component: FlmTreeViewComponent;
  let fixture: ComponentFixture<FlmTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlmTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlmTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
