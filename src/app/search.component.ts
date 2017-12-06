import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'search',
  template: `
    <p>
      <input type="search" class="input">
      <button>Filtruj</button>
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
