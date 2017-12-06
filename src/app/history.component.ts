import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'history',
  template: `
    <p>
      history works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
