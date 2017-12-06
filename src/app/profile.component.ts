import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'profile',
  template: `
    <p>
      profile works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
