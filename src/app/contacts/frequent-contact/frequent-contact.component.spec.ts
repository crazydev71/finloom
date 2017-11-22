import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentContactComponent } from './frequent-contact.component';

describe('FrequentContactComponent', () => {
  let component: FrequentContactComponent;
  let fixture: ComponentFixture<FrequentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
