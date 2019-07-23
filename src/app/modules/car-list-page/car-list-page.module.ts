import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { RouterModule } from '@angular/router'

import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { CarListPageWapperComponent } from './components/car-list-page-wapper/car-list-page-wapper.component';
import { SearchOptionsComponent } from './components/search-options/search-options.component';
import { ResultOfSearchOptionsComponent } from './components/result-of-search-options/result-of-search-options.component';

import { CarListRoutes } from './car-list-page.routing';
import { SortPipe } from 'src/common/pipes/sort-pipe/sort.pipe';

@NgModule({
  declarations: [
    SearchOptionsComponent,
    ResultOfSearchOptionsComponent,
    SearchWidgetComponent,
    CarListPageWapperComponent,
    SortPipe
  ],
  imports: [
    FormsModule, 
    CommonModule,
    Ng5SliderModule,
    RouterModule.forChild(CarListRoutes)    
  ],  
  providers: [],
  exports: [CarListPageWapperComponent]
})

export class CarListPageModule {}