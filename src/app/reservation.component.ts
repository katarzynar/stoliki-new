import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RestaurantComponent } from "./restaurant.component";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { NgIf } from '@angular/common';


@Component({
  selector: 'reservation',
  template: `
    <p>
      reservation works!
    
      
    </p>

    <div *ngIf="restaurant">
    <h3>{{restaurant.name}}</h3>
    <img [src]="restaurant.img">
   </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ReservationComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  restaurant = {}

  fetchRestaurant(id) {
    this.http.get('http://localhost:3000/restaurants/' + id + '?_embed=restaurant')
      .subscribe(restaurant => {
        this.restaurant = restaurant
      })
  }

  ngOnInit() {
    let id = this.route.snapshot.params['restaurant']
    this.fetchRestaurant(id)
  }

}

  /*constructor() { }

  ngOnInit() {
  }

}*/
