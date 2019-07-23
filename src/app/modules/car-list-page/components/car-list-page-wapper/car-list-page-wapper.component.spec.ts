import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListPageWapperComponent } from './car-list-page-wapper.component';

describe('CarListPageWapperComponent', () => {
  let component: CarListPageWapperComponent;
  let fixture: ComponentFixture<CarListPageWapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListPageWapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListPageWapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
