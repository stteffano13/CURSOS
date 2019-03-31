import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, Nav, } from 'ionic-angular';
import { NavController, AlertController } from "ionic-angular";

import { UserService } from "../../app/services/user.services";
import { FileService } from "../../app/services/file.services";

//import { PublicistaPage } from '../publicista/publicista';
import { ImagenesPage } from '../Imagenes/imagenes';

import { Observable } from "rxjs";
import { saveAs } from 'file-saver';

@Component({
  selector: "page-principal",
  templateUrl: "principal.html"
})

export class PrincipalPage implements OnInit {


  @ViewChild('NAV') nav: Nav;

  banderBienvenida = true;

  banderaUnidadUno = false;
  banderaUnidadDos = false;
  banderaUnidadTres = false;
  banderaUnidadCuatro = false;
  banderaUnidadCinco = false;
  banderaUnidadSeis = false;
  banderCard=false;
  identity = 0;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private _userService: UserService, private _fileServices: FileService) {

  }

  ngOnInit() {
    this.identity = JSON.parse(localStorage.getItem("identity"));
    if (JSON.parse(localStorage.getItem("bienvenida")) == 1) {
      this.banderBienvenida = false;
      this.banderCard=true;
    }else{
      this.banderCard=false;
      this.banderBienvenida=true;
    }

  }


  EmpezarCurso() {
    this.banderBienvenida = !this.banderBienvenida;
    localStorage.setItem("bienvenida", '1');
    this.banderCard=true;
  }


  AbrirUnidadUno() {
    this.banderaUnidadUno = !this.banderaUnidadUno;
  }

  AbrirUnidadDos() {
    this.banderaUnidadDos = !this.banderaUnidadDos;
  }
  AbrirUnidadTres() {
    this.banderaUnidadTres = !this.banderaUnidadTres;
  }

  AbrirUnidadCuatro() {
    this.banderaUnidadCuatro = !this.banderaUnidadCuatro;
  }

  AbrirUnidadCinco() {
    this.banderaUnidadCinco = !this.banderaUnidadCinco;
  }

  AbrirUnidadSeis() {
    this.banderaUnidadSeis = !this.banderaUnidadSeis;

  }

  AbrirImagenes(numerounidad) {

    localStorage.setItem("numerounidad", numerounidad);
    
    this.navCtrl.push(ImagenesPage);
  }

  descargar() {
    this.banderaUnidadUno=!this.banderaUnidadUno;
    var filename = "1.GUIA.ALUMNO.EPANET.pdf";
    this._fileServices.downloadFile(filename).subscribe(data => 
   saveAs(data, filename), error => console.error(error));

  }

  Logout()
  {
    this._userService.logout();
  }
}