import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  template: `
    <p>
      restaurant works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
