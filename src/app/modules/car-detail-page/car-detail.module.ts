import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { router } from './car-detail.routing';

import { CarOverviewTabsComponent } from 'src/app/modules/car-detail-page/components/car-overview-tabs/car-overview-tabs.component';
import { RouterModule } from '@angular/router';
import { CarDetailWapperComponent } from './components/car-detail-wapper/car-detail-wapper.component';
import { ContactComponent } from 'src/app/modules/car-detail-page/components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FilterTechnicalPipe } from 'src/common/pipes/filter-technical-pipe/filter-technical.pipe';
import { CarGalleryComponent } from './components/car-gallery/car-gallery.component';
import { CarFinancingCalculatorComponent } from './components/car-financing-calculator/car-financing-calculator.component';

@NgModule({
  declarations:[
    CarOverviewTabsComponent,
    CarDetailWapperComponent,
    ContactComponent,
    FilterTechnicalPipe,
    CarGalleryComponent,
    CarFinancingCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(router)
  ], 
  exports: [],
})

export class CarDetailModule{}