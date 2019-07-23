import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ResultOfSearchOptionsComponent } from './result-of-search-options.component';
import { SortPipe } from 'src/common/pipes/sort-pipe/sort.pipe';
import { RouterModule } from '@angular/router';
import { CarService } from 'src/common/service/car.service';

describe('ResultOfSearchOptionsComponent', () => {
  let component: ResultOfSearchOptionsComponent;
  let fixture: ComponentFixture<ResultOfSearchOptionsComponent>;
  let carService: CarService;

  const searchOptions = {
    condition: '0',
    model: '0',
    fuelType: '0',
    seats: '0',    
    origin: '0',
    minPrice: 200,
    maxPrice: 2000
  };

  let dummySortCritiria = [
    { value: 0, display: "Ngày: Mới nhất" },
    { value: 1, display: "Ngày: Cũ nhất" },
    { value: 2, display: "Giá: Cao nhất" },
    { value: 3, display: "Giá: Thấp nhất" }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultOfSearchOptionsComponent, SortPipe ],
      imports: [FormsModule, RouterModule ],
      providers: [CarService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultOfSearchOptionsComponent);
    carService = TestBed.get(CarService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check sort critiria initial', () => {
    expect(component.sortCritiria).toEqual(dummySortCritiria);
  });

  it('exist car service', inject([CarService], (injectService: CarService)=>{
    expect(injectService).toBe(carService);
  }));

});
