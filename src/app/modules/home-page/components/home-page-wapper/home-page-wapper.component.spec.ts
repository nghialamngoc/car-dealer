import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageWapperComponent } from './home-page-wapper.component';

describe('HomePageWapperComponent', () => {
  let component: HomePageWapperComponent;
  let fixture: ComponentFixture<HomePageWapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageWapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageWapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
