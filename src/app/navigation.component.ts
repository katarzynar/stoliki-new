import { animation, state, style, transition, trigger, animate } from '@angular/animations';
import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'navigation',
  animations:[
    trigger('slideInOut',[
      state('closed', style({
        transform: 'translateX(100%)'
      })),
      state('open', style({
        transform: 'translateX(0%)'
      })),
      transition('closed => open', animate('100ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])    
  ],
  template: `

  <header class="mainHeader">
  <div class="mainHeader__logo" [routerLink]="['']">
         <div> <img src="assets/img/logo-header.jpg" class="mainHeader__logo__img"></div>
      <h1 class="mainHeader__logo__title logo__title">Stoliki</h1>
  </div>

    <div class="nav__icon" (click)="toggleMenu()" #navButton>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>
      <nav class="mainHeader__nav"  [@slideInOut]="menuState" #navRef (click)="toggleMenu()">
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

  @ViewChild('navRef')
  navRef:ElementRef

  @ViewChild('navButton')
  navButton:ElementRef
  

  // <div (click)="closeNav($event.path)>"
  @HostListener('document:click',['$event.path'])
  closeNav(path){
    if(!path.includes(this.navRef.nativeElement)
    && !path.includes(this.navButton.nativeElement)){
      this.menuState = 'closed'
    }
  }

  toggleMenu(){
    this.menuState = this.menuState == 'open'? 'closed' : 'open'
  }
  
  menuState = 'closed'

  constructor() { }

  ngOnInit() {
  }

}
