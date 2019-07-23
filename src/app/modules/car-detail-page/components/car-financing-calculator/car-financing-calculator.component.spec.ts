import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFinancingCalculatorComponent } from './car-financing-calculator.component';

describe('CarFinancingCalculatorComponent', () => {
  let component: CarFinancingCalculatorComponent;
  let fixture: ComponentFixture<CarFinancingCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFinancingCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFinancingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
