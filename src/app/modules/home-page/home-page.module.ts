import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AboutCarDealerComponent } from 'src/common/components/about-car-dealer/about-car-dealer.component';
import { CustomerReviewComponent } from 'src/common/components/customer-review/customer-review.component';
import { ThisisnameComponent } from 'src/common/components/thisisname/thisisname.component';
import { ArticleComponent } from 'src/common/components/article/article.component';
import { CarListingTopComponent } from 'src/common/components/car-listing-components/car-listing-top/car-listing-top.component';
import { CarListingContentComponent } from 'src/common/components/car-listing-components/car-listing-content/car-listing-content.component';
import { HomePageWapperComponent } from './components/home-page-wapper/home-page-wapper.component';

import { HomePageRoutes } from './home-page.routing';

@NgModule({
  declarations: [
    AboutCarDealerComponent,
    CustomerReviewComponent,
    ThisisnameComponent,
    ArticleComponent,
    CarListingTopComponent,
    CarListingContentComponent,
    HomePageWapperComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(HomePageRoutes)
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [
    HomePageWapperComponent
  ]
})

export class HomePageModule {}