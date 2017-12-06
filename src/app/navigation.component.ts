import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'navigation',
  template: `

  <header class="mainHeader">
  <div class="mainHeader__logo" [routerLink]="['']">
         <div> <img src="img/logo-header.jpg" class="mainHeader__logo__img"></div>
      <h1 class="mainHeader__logo__title logo__title">Stoliki</h1>
  </div>

    <nav>
      <ul>
        <li [routerLink]="['']">Home</li>
        <li [routerLink]="['/profile']">Profil</li>
        <li [routerLink]="['/search']">Wyszukaj</li>
        <li [routerLink]="['/favourite']">Ulubione</li>
        <li [routerLink]="['/reservations']">Moje rezerwacje</li>
        <li [routerLink]="['/history']">Historia</li>
        <li [routerLink]="['']">Wyloguj</li>
      </ul>
    </nav>
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
