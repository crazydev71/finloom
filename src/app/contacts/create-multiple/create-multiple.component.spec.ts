import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMultipleComponent } from './create-multiple.component';

describe('CreateMultipleComponent', () => {
  let component: CreateMultipleComponent;
  let fixture: ComponentFixture<CreateMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
