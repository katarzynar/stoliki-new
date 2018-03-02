import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { HomeComponent } from "./home.component";
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-restaurant',
  template: `

<div class="text-left">
    <h1 class="bigTitle">
 {{restaurant.name}}
    </h1>
<span class="title">{{restaurant.address}}</span>
</div>
<div class="photo" [ngStyle]="{'background-image': 'url(' + restaurant.img + ')'}">
</div>
  <div class="flex-container text-center">
  <button class="btn btn--light btn--oneThird sbutton">MENU</button>
  <button class="btn btn--light btn--oneThird sbutton">OPINIE</button>
      <button class="btn btn--oneThird sbutton" [routerLink]="['/reservation']" [queryParams]="{
        
        restaurant: this.restaurant && this.restaurant.id}">Zarezerwuj</button>

    </div>

  
  `,
  styles: [`
    .container{
      margin: 10px;
    }
    .flex-container{
      display:flex;
      justify-content:space-between;
      width: 90vw;
    }

    .sbutton{
      width: 30%;
    }

    
    .photo{
      background-size: cover;
      height: 30vh;
      border-radius: 4px;
      margin: 20px 0 10px 0;
    }

    .title{
      font-family: lato;
    }
    
    `
  ],

})

export class RestaurantComponent implements OnInit {


    
      constructor(private route: ActivatedRoute,
        private http: HttpClient) { }
    
      restaurant = {}
    
      fetchRestaurant(id) {
        this.http.get('http://localhost:3000/restaurants/' + id)
          .subscribe(restaurant => {
            this.restaurant = restaurant
          })
      }
    
      ngOnInit() {
        let id = this.route.snapshot.params['id']
        this.fetchRestaurant(id)
      }
    
    }
  

   