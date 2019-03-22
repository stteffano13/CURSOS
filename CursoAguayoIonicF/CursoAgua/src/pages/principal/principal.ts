import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav,  } from 'ionic-angular';
import { NavController, AlertController } from "ionic-angular";

import { UserService } from "../../app/services/user.services";
//import { PublicistaPage } from '../publicista/publicista';
//import { ContratistaPage } from '../contratista/contratista';

import { Observable } from "rxjs";

@Component({
  selector: "page-principal",
  templateUrl: "principal.html"
})

export class PrincipalPage implements OnInit {
 
  
  @ViewChild('NAV') nav: Nav;

  banderBienvenida= true;

  banderaUnidadUno=false;
  banderaUnidadDos=false;
   identity=0;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,private _userService: UserService,) {
  
  }

  ngOnInit()
  {
    this.identity =JSON.parse(localStorage.getItem("identity")) ;

  }


  EmpezarCurso()
  {
    this.banderBienvenida = !this.banderBienvenida;
  }


  AbrirUnidadUno()
  {
    this.banderaUnidadUno=!this.banderaUnidadUno;
  }

  AbrirUnidadDos()
  {
    this.banderaUnidadDos=!this.banderaUnidadDos;
  }

}