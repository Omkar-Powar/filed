import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydetailsComponent } from './paydetails.component';

describe('PaydetailsComponent', () => {
  let component: PaydetailsComponent;
  let fixture: ComponentFixture<PaydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
