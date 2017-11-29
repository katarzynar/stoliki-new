import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <input class="input input--search" type="text">

  <button class="btn">SZCZEGÓŁOWE</button>

  <app-restaurants-list></app-restaurants-list>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
