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
  
  var unidad={'Slide1',"Slide2"}
 
    identity = 0;
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private _userService: UserService, ) {
  
    }
  
    ngOnInit() {
      this.identity = JSON.parse(localStorage.getItem("identity"));
    }

    Menu()
    {
       // this.navCtrl.push(PrincipalPage);
        location.reload();
    }
}