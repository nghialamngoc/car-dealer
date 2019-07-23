import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisisnameComponent } from './thisisname.component';

describe('ThisisnameComponent', () => {
  let component: ThisisnameComponent;
  let fixture: ComponentFixture<ThisisnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisisnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisisnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
