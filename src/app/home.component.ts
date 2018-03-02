import { Component, OnInit, ViewEncapsulation, Pipe, Directive, PipeTransform,  } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';
import { NgIf } from '@angular/common';




@Component({
  selector: 'app-home',
  template: `




  <input class="input input--search" type="text"  placeholder="szukaj"  [(ngModel)]="searchText">

  <button class="btn" [routerLink]="['/filtry']">SZCZEGÓŁOWE</button>

  
  <div class="res-box sliderSection__slider slider" *ngFor="let restaurant of restaurants | filter:searchText" 
  [ngStyle]="{'background-image': 'url(' + restaurant.img + ')'}">


  

  <button class="star" (click)="favourite(restaurant)">☆</button>

  <div class="sliderSection__slider__content" [routerLink]="['/restaurant', restaurant.id]">
    <h4 class="sliderSection__slider__content__title">{{restaurant.name}}</h4>
    
    <span class="sliderSection__slider__content__info">{{restaurant.kind}}</span>
    <span class="sliderSection__slider__content__info">{{restaurant.address}}</span>
  </div>
   
  </div>



 
  
  `,
  styles: [`
  .res-box{
    height: 200px;
  }

  span{
    display:block;
    width:100%;
  }

  .star{
    font-size:60px;
    background-color: transparent;
    position: absolute;
    left: 44px;
    color:white;
  }
  `],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  fetchFavourite(): any {
    throw new Error("Method not implemented.");
  }
  fetchFavourites(): any {
    throw new Error("Method not implemented.");
  }


  
  search(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  list: Object;

  constructor(private http: HttpClient) { }

  serch(query){
   this.search(query);
  }

  restaurants
  restaurant




  fetchRestaurants(){
    this.http.get('http://localhost:3000/restaurants')
      .subscribe( restaurants => {
        this.restaurants = restaurants
      })
  }




  



  ngOnInit() {

    this.fetchRestaurants()

  
    }

    favourite(restaurant){
      // tworzymy ulubione
      let favourite = {
        "restautantName": restaurant.name,
        "restaurantId": restaurant.id,
         "userId":1
          
      }


      
      this.http.post('http://localhost:3000/favourites',favourite)
      .subscribe(()=>{
             /// Pobieramy najnowsze ulubione (krok 2.3)
             this.fetchFavourites()
      })

 
}
}





