import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { SearchComponent } from './search.component';
import { FilterPipe} from './filter.pipe';


@Component({
  selector: 'search-results-page',
  template: `

    <input type="text" class="input"  [(ngModel)]="searchText" />

    <ul class="list-group">
    <li class="list-group-item"  *ngFor="let restaurant of restaurants | filter:searchText">
      {{restaurant.name}}{{restaurant.address}}
    </li>
  </ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsPageComponent implements OnInit {

  search: any;

  constructor(private http: HttpClient,
    private route:ActivatedRoute) { }
  
    serch(query){
     this.search(query);
    }
  
    restaurants
    restaurant
  


  ngOnInit() {

    /*let query = this.route.snapshot.queryParamMap.get('query')*/
    this.http.get('http://localhost:3000/restaurants', {
     /* params:{
        where: `name LIKE '%${query}%'`
      }*/
    })
      .subscribe(restaurants => {
        this.restaurants = restaurants;
      })
  }

}

