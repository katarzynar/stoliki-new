import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'navigation',
  template: `

  <header class="mainHeader">
  <div class="mainHeader__logo" [routerLink]="['']">
         <div> <img src="img/logo-header.jpg" class="mainHeader__logo__img"></div>
      <h1 class="mainHeader__logo__title logo__title">Stoliki</h1>
  </div>

    <div class="nav__icon">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>
      <nav class="mainHeader__nav">
          <ul>
            <li class="mainHeader__nav__item" [routerLink]="['']">Home</li>
            <li class="mainHeader__nav__item" [routerLink]="['/profile']">Profil</li>
            <li class="mainHeader__nav__item" [routerLink]="['/search']">Wyszukaj</li>
            <li class="mainHeader__nav__item" [routerLink]="['/favourite']">Ulubione</li>
            <li class="mainHeader__nav__item" [routerLink]="['/reservations']">Moje rezerwacje</li>
            <li class="mainHeader__nav__item" [routerLink]="['/history']">Historia</li>
            <li class="mainHeader__nav__item" [routerLink]="['']">Wyloguj</li>
          </ul>
    </nav>
    </div>
  </header>
  `,
  styles: [],
 
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
