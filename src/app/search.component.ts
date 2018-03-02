import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { SearchResultsPageComponent } from './search-results-page.component'; 



@Component({
  selector: 'search',
  template: `
 
    <div id="search-component">
    <h4 class="title">Wyszukiwanie</h4>
   
    <search-results-page></search-results-page>
  </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

    constructor(private router:Router) { }
  
  
    search(query){
      this.router.navigate(['search','results'],{
        queryParams: {
          query
        }
      })
    }

  }