import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-restaurants-list',
  template: `
    <p>
      restaurants-list works!
    </p>

    <ul> <li [routerLink]="['./restaurant']" *ngFor="let restaurant of list">
        <div>
          <img src = "{{restaurant.img}}">
        </div>
        <div>
          <span>{{restaurant.name}}</span>
          <span>{{restaurant.kind}}</span>
        </div> 
      </li>
    </ul> 
  `,
  styles: [
    `img{
      width:200px;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantsListComponent implements OnInit {
  list: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/restaurants')
    .subscribe( list => this.list = list )
  }

}
