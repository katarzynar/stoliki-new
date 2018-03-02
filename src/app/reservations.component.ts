import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'reservations',
  template: `

  <h2 class="bigTitle bigTitle--color pageName">Twoje rezerwacje</h2>

  <div class="flex-container">
  <button class="btn btn--small" [routerLink]="['/history']">Historia</button>
  <button class="btn btn--small btn--pressed">Zaplanowane</button>
  </div>
  <div class="resView">
  <div class="resView__image" [ngStyle]="{'background-image': 'url(' + 'assets/img/restaurant1.jpg' + ')'}">

  </div>
  <div class="resView__content text-left">
  <h3 class="resView__content__resTitle ">Nazwa restauracji</h3>
  <span class="resView__content--info--lightgray">12/10/2018</span>
  <span class="resView__content--info">19:00</span>
  <span class="resView__content--info">2 os.</span>
 </div>
 </div>


  `,
  styles: [
    `
    .pageName{
      margin: 20px;
    }

    
    `

  ],
  encapsulation: ViewEncapsulation.None
})
export class ReservationsComponent implements OnInit {

  

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }
    
    restaurant

  fetchRestaurant(id) {
    this.http.get('http://localhost:3000/restaurants/' + id + '?_embed=restaurant')
      .subscribe(restaurant => {
        this.restaurant = restaurant
      })
  }

  ngOnInit() {
    let id = this.route.snapshot.queryParams['restaurant']
    this.fetchRestaurant(id)
  }

}
