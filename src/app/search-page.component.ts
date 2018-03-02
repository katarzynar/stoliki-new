import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'search-page',
  template: `

    <div id="search-component">u
    <h4>Wyszukiwanie</h4>
   
    <input type="search" class="input"  />
   
    <ul class="search-result">
      <li *ngFor="let restaurant of restaurants" >
       <p>
          {{restaurant.name}}
        </p>
      </li>
  
    </ul>
  </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
