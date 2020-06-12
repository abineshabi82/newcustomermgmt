import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCartViewComponent } from './customer-cart-view.component';

describe('CustomerCartViewComponent', () => {
  let component: CustomerCartViewComponent;
  let fixture: ComponentFixture<CustomerCartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCartViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
