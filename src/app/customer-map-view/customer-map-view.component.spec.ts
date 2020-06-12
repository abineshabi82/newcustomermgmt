import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMapViewComponent } from './customer-map-view.component';

describe('CustomerMapViewComponent', () => {
  let component: CustomerMapViewComponent;
  let fixture: ComponentFixture<CustomerMapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
