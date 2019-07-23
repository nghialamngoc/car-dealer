import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListingTopComponent } from './car-listing-top.component';

describe('CarListingTopComponent', () => {
  let component: CarListingTopComponent;
  let fixture: ComponentFixture<CarListingTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListingTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListingTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
