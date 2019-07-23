import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOfSearchOptionsComponent } from './result-of-search-options.component';

describe('ResultOfSearchOptionsComponent', () => {
  let component: ResultOfSearchOptionsComponent;
  let fixture: ComponentFixture<ResultOfSearchOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultOfSearchOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultOfSearchOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
