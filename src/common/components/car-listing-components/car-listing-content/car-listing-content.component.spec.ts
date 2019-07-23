import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListingContentComponent } from './car-listing-content.component';

describe('CarListingContentComponent', () => {
  let component: CarListingContentComponent;
  let fixture: ComponentFixture<CarListingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
