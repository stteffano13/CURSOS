import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav, } from 'ionic-angular';
import { NavController, AlertController } from "ionic-angular";

import { UserService } from "../../app/services/user.services";
import { PrincipalPage } from '../principal/principal';
//import { ContratistaPage } from '../contratista/contratista';

import { Observable } from "rxjs";

@Component({
    selector: "page-imagenes",
    templateUrl: "imagenes.html"
  })
  
  export class ImagenesPage implements OnInit {
  
  
    @ViewChild('NAV') nav: Nav;

  
  
  ImgsUnidad1=[
      { "id": 1, "name": "assets/imgs/Slide1.png" },
      { "id": 2, "name": "assets/imgs/Slide2.png"},
      { "id": 3, "name": "assets/imgs/Slide3.png"},
      { "id": 4, "name": "assets/imgs/Slide4.png"},
      { "id": 5, "name": "assets/imgs/Slide5.png"},
      { "id": 6, "name": "assets/imgs/Slide6.png"},
      { "id": 7, "name": "assets/imgs/Slide7.png"},
      { "id": 8, "name": "assets/imgs/Slide8.png"},
      { "id": 9, "name": "assets/imgs/Slide9.png"},
      { "id": 10, "name": "assets/imgs/Slide10.png"},
      { "id": 11, "name": "assets/imgs/Slide11.png"},
      { "id": 12, "name": "assets/imgs/Slide12.png"},
      { "id": 13, "name": "assets/imgs/Slide13.png"},
      { "id": 14, "name": "assets/imgs/Slide14.png"},
      { "id": 15, "name": "assets/imgs/Slide15.png"},
      { "id": 16, "name": "assets/imgs/Slide16.png"},
      { "id": 17, "name": "assets/imgs/Slide17.png"},
      { "id": 18, "name": "assets/imgs/Slide18.png"},
      { "id": 19, "name": "assets/imgs/Slide19.png"},
      { "id": 20, "name": "assets/imgs/Slide20.png"},
      { "id": 21, "name": "assets/imgs/Slide21.png"},
      { "id": 22, "name": "assets/imgs/Slide22.png"},
      { "id": 23, "name": "assets/imgs/Slide23.png"},
      { "id": 24, "name": "assets/imgs/Slide24.png"},
      { "id": 25, "name": "assets/imgs/Slide25.png"},

      { "id": 26, "name": "assets/imgs/Slide26.png" },
      { "id": 27, "name": "assets/imgs/Slide27.png"},
      { "id": 28, "name": "assets/imgs/Slide28.png"},
      { "id": 29, "name": "assets/imgs/Slide29.png"},
      { "id": 30, "name": "assets/imgs/Slide30.png"},
      { "id": 31, "name": "assets/imgs/Slide31.png"},
      { "id": 32, "name": "assets/imgs/Slide32.png"},
      { "id": 33, "name": "assets/imgs/Slide33.png"},
      { "id": 34, "name": "assets/imgs/Slide34.png"},
      { "id": 35, "name": "assets/imgs/Slide35.png"},
      { "id": 36, "name": "assets/imgs/Slide36.png"},
      { "id": 37, "name": "assets/imgs/Slide37.png"},
      { "id": 38, "name": "assets/imgs/Slide38.png"},
      { "id": 39, "name": "assets/imgs/Slide39.png"},
      { "id": 40, "name": "assets/imgs/Slide40.png"},
      { "id": 41, "name": "assets/imgs/Slide41.png"},
      { "id": 42, "name": "assets/imgs/Slide42.png"},
      { "id": 43, "name": "assets/imgs/Slide43.png"},
      { "id": 44, "name": "assets/imgs/Slide44.png"},
      { "id": 45, "name": "assets/imgs/Slide45.png"},
      { "id": 46, "name": "assets/imgs/Slide46.png"},
      { "id": 47, "name": "assets/imgs/Slide47.png"},
      { "id": 48, "name": "assets/imgs/Slide48.png"},
      { "id": 49, "name": "assets/imgs/Slide49.png"},
      { "id": 50, "name": "assets/imgs/Slide50.png"},

      { "id": 30, "name": "assets/imgs/Slide30.png"},
      { "id": 31, "name": "assets/imgs/Slide31.png"},
      { "id": 32, "name": "assets/imgs/Slide32.png"},
      { "id": 33, "name": "assets/imgs/Slide33.png"},
      { "id": 34, "name": "assets/imgs/Slide34.png"},
      { "id": 35, "name": "assets/imgs/Slide35.png"},
      { "id": 36, "name": "assets/imgs/Slide36.png"},
      { "id": 37, "name": "assets/imgs/Slide37.png"},
      { "id": 38, "name": "assets/imgs/Slide38.png"},
      { "id": 39, "name": "assets/imgs/Slide39.png"},
      { "id": 40, "name": "assets/imgs/Slide40.png"},
      { "id": 41, "name": "assets/imgs/Slide41.png"},
      { "id": 42, "name": "assets/imgs/Slide42.png"},
      { "id": 43, "name": "assets/imgs/Slide43.png"},
      { "id": 44, "name": "assets/imgs/Slide44.png"},
      { "id": 45, "name": "assets/imgs/Slide45.png"},
      { "id": 46, "name": "assets/imgs/Slide46.png"},
      { "id": 47, "name": "assets/imgs/Slide47.png"},
      { "id": 48, "name": "assets/imgs/Slide48.png"},
      { "id": 49, "name": "assets/imgs/Slide49.png"},
      { "id": 50, "name": "assets/imgs/Slide50.png"},

    ];

    identity = 0;
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private _userService: UserService, ) {
  
    }
  
    ngOnInit() {
      this.identity = JSON.parse(localStorage.getItem("identity"));
      /*let j=0;
      for(let i=0; i<this.ImgsUnidad1.length; i++){
        this.ImgsUnidad1[j]=this.ImgsUnidad1[i];
        j++;
    }*/
    }

    Menu()
    {
       // this.navCtrl.push(PrincipalPage);
        location.reload();
    }
}