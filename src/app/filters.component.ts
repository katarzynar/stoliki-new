import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'filters',
  template: `
  <h2 class="bigTitle bigTitle--color">Wyszukiwanie szczegółowe</h2>
  
  <span class="title">DYSTANS</span>
  <input type="range" id="one" min="0" max="150" value="0"/>
  <span class="title">ZAKRES CENOWY</span>
  <input type="range" id="one" min="0" max="150" value="0"/>

  <span class="title">ILOŚĆ OSÓB</span>
  <div class="flex">
      
  </div>
  
  <span class="title">RODZAJ KUCHNI</span>
  <button class="btn btn--small btn--light btn--pressed">POLSKA</button>
  <button class="btn btn--small btn--light">MEXYKAŃSKA</button>
  <button class="btn btn--small btn--light">TAJSKA</button>
  <button class="btn btn--small btn--light">AMERYKAŃSKA</button>
  <button class="btn btn--small btn--light">CHIŃSKA</button>
  <button class="btn btn--small">MORE</button>
  `,
  styles: [
    `.flex{
      display: flex;
      width:100%;
      justify-content: space-around;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {
  setPerson: any;
  person: number;

  constructor() { }

  ngOnInit() {
   
    
    
  }

}
