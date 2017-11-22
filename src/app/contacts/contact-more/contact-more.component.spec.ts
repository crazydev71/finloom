import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMoreComponent } from './contact-more.component';

describe('ContactMoreComponent', () => {
  let component: ContactMoreComponent;
  let fixture: ComponentFixture<ContactMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
