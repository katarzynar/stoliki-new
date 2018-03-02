import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'profile',
  template: `
   
<div>
    <div class="img-box"> 
      <img src="assets/img/pofil-img.jpg" />  
    </div>
</div>

<h2 class="title title--underscore">Jan Kowalski</h2>

<button class="btn">EDYTU PROFIL</button>
<button class="btn">ZMIEŃ ZDJĘCIEL</button>
<button class="btn">ZMIEŃ HASŁO</button>
  `,
  styles: [
    `
    .img-box{
      height:350px;
      border-radius:25px;
      margin:40px;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
