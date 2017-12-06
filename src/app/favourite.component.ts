import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourite',
  template: `
    <p>
      favourite works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class FavouriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
