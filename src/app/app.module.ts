import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RestaurantsListComponent } from './restaurants-list.component';
import { RestaurantComponent } from './restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsListComponent,
    RestaurantComponent,

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
