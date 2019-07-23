import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { SlideShowComponent } from 'src/common/components/slide-show/slide-show.component';
import { NavBarComponent } from 'src/common/components/nav-bar/nav-bar.component';

//Module
import { CarListPageModule } from './modules/car-list-page/car-list-page.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { CarDetailModule } from './modules/car-detail-page/car-detail.module';
import { FooterComponent } from 'src/common/components/footer/footer.component';

const appRoutes: Routes = [  
  { path: '', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    // MDBBootstrapModule.forRoot(),
    BrowserModule,      
    FormsModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
    CarListPageModule,
    HomePageModule,
    CarDetailModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
