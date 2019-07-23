import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOverviewTabsComponent } from './car-overview-tabs.component';

describe('CarOverviewTabsComponent', () => {
  let component: CarOverviewTabsComponent;
  let fixture: ComponentFixture<CarOverviewTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOverviewTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOverviewTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
