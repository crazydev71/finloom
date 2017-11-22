import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDuplicatesComponent } from './contact-duplicates.component';

describe('ContactDuplicatesComponent', () => {
  let component: ContactDuplicatesComponent;
  let fixture: ComponentFixture<ContactDuplicatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDuplicatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDuplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
