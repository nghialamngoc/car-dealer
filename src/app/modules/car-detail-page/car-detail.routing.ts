import { Routes } from "@angular/router";
import { CarDetailWapperComponent } from './components/car-detail-wapper/car-detail-wapper.component';

export const router: Routes = [
  { path: 'car-detail/:id', component: CarDetailWapperComponent }
]

