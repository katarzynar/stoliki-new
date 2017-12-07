import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RestaurantsListComponent } from './restaurants-list.component';
import { RestaurantComponent } from './restaurant.component';
import { HomeComponent } from './home.component';
import { FiltersComponent } from './filters.component';

import { SearchComponent } from './search.component';
import { NavigationComponent } from './navigation.component';
import { ProfileComponent } from './profile.component';
import { FavouriteComponent } from './favourite.component';
import { ReservationsComponent } from './reservations.component';
import { HistoryComponent } from './history.component';






@NgModule({
  declarations: [
    AppComponent,
    RestaurantsListComponent,
    RestaurantComponent,
    HomeComponent,
    FiltersComponent,
    SearchComponent,
    NavigationComponent,
    ProfileComponent,
    FavouriteComponent,
    ReservationsComponent,
    HistoryComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
