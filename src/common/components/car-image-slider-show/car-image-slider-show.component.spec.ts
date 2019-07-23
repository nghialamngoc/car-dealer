import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImageSliderShowComponent } from './car-image-slider-show.component';

describe('CarImageSliderShowComponent', () => {
  let component: CarImageSliderShowComponent;
  let fixture: ComponentFixture<CarImageSliderShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarImageSliderShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarImageSliderShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
