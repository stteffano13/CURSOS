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
  banderaUnidadTres=false;
  banderaUnidadCuatro=false;
  banderaUnidadCinco=false;
  banderaUnidadSeis=false;
   identity=0;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,private _userService: UserService,) {
  
  }

  ngOnInit()
  {
    this.identity =JSON.parse(localStorage.getItem("identity")) ;
    if(JSON.parse(localStorage.getItem("bienvenida"))=='1')
    {
      this.banderBienvenida=false;
    }

  }


  EmpezarCurso()
  {
    this.banderBienvenida = !this.banderBienvenida;
    localStorage.setItem("bienvenida",'1');
  }


  AbrirUnidadUno()
  {
    this.banderaUnidadUno=!this.banderaUnidadUno;
  }

  AbrirUnidadDos()
  {
    this.banderaUnidadDos=!this.banderaUnidadDos;
  }
  AbrirUnidadTres()
  {
    this.banderaUnidadTres=!this.banderaUnidadTres;
  }

  AbrirUnidadCuatro()
  {
    this.banderaUnidadCuatro=!this.banderaUnidadCuatro;
  }

  AbrirUnidadCinco()
  {
    this.banderaUnidadCinco=!this.banderaUnidadCinco;
  }

  AbrirUnidadSeis()
  {
    this.banderaUnidadSeis= !this.banderaUnidadSeis;

  }
}