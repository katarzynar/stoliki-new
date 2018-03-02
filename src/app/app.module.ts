import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import {  Pipe, Directive } from '@angular/core';

import { Routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";

import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { FilterPipe} from './filter.pipe';

import { AppComponent } from './app.component';
import { RestaurantsListComponent } from './restaurants-list.component';
import { RestaurantComponent } from './restaurant.component';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search.component';
import { NavigationComponent } from './navigation.component';
import { ProfileComponent } from './profile.component';
import { FavouriteComponent } from './favourite.component';
import { ReservationsComponent } from './reservations.component';
import { HistoryComponent } from './history.component';
import { FiltersComponent } from './filters.component';
import { ReservationComponent } from './reservation.component';
import { SearchPageComponent } from './search-page.component';
import { SearchResultsPageComponent } from './search-results-page.component'; 




@NgModule({
  declarations: [
    AppComponent,
    RestaurantsListComponent,
    RestaurantComponent,
    HomeComponent,
    SearchComponent,
    NavigationComponent,
    ProfileComponent,
    FavouriteComponent,
    ReservationsComponent,
    HistoryComponent,
    FiltersComponent,
    ReservationComponent,
    SearchPageComponent,
    SearchResultsPageComponent,
    FilterPipe
  ],
  imports: [
    BrowserAnimationsModule, 
    BrowserModule,
    HttpClientModule,
    Routing,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
