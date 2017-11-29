import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-restaurants-list',
  template: `

   <div *ngFor="let restaurant of restaurants"
   [ngStyle]="{'background-image': 'url(' + restaurant.img + ')'}">
     {{restaurant.name}}
   </div>

  `,
  styles: [
    `img{
      width:200px;
    }

    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantsListComponent implements OnInit {
  list: Object;

  constructor(private http: HttpClient) { }

  restaurants

  fetchRestaurants(){
    this.http.get('http://localhost:3000/restaurants')
      .subscribe( restaurants => {
        this.restaurants = restaurants
      })
  }

  ngOnInit() {

    this.fetchRestaurants()

  }

}
