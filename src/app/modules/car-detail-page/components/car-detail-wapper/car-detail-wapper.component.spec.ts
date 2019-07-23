import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailWapperComponent } from './car-detail-wapper.component';

describe('CarDetailWapperComponent', () => {
  let component: CarDetailWapperComponent;
  let fixture: ComponentFixture<CarDetailWapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailWapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailWapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
