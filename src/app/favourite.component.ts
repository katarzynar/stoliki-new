import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgIf } from '@angular/common';


@Component({
  selector: 'favourite',
  template: `
    <p>
      favourite works!
    </p>

    <div class="res-box" *ngFor="let favourite of favourites">

      <h1>{{favourite.id}}</h1>
    </div>


 
   `,
   styles: [
     `.res-box{
       height: 200px;
     }
     
   
    `],
    encapsulation: ViewEncapsulation.None
  })
  export class FavouriteComponent implements OnInit {
  http: any;
 

   // obiekt gdzie przechowamy favourites w postaci { id: favourite }
   favourites = {}
   
     fetchFavourites(){  
       // pobieramy
       this.http.get('http://localhost:3000/favourites?userId=1')
       .subscribe((favourites:any[])=>{
   
         // czyscimy favourites
         this.favourites = {}
   
         // zapisujemy w postaci {id: favourite} 
         // aby szybko znalesc po id - favourites[occupation.id]
         favourites.forEach(favourite => {
           this.favourites[favourite.restaurantId] = favourite
         });
       })
     }

     ngOnInit() {
      
          this.fetchFavourites() 
          }
       
        }