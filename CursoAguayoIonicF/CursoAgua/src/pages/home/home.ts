import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, MenuController } from "ionic-angular";
import { UserService } from "../../app/services/user.services";
import { PrincipalPage } from "../principal/principal";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private _userService: UserService,
    public alertCtrl: AlertController,) {
    
  }

  public obj = {
    email: null,
    password: null
  };


  public identity;
  public token;


  public onSubmit() {
  
      //conseguir losdatos del usuario
      //animacion de carga del sistema
      this.verificarUsuario();
      this._userService.singup(this.obj, " ").subscribe(
        response => {
          console.log(response + "esto viene en la respuesta");
          let identity = response.user;
          this.identity = identity;
          console.log(identity);
          if (!this.identity._id) {
            console.log("el usuario no se ha logueado correctamente");
  
            // aqui la alerta
          } else {
            // crear local storage
            localStorage.setItem("identity", JSON.stringify(identity));
  
            this._userService.singup(this.obj, "true").subscribe(
              response => {
                let token = response.token;
                this.token = token;
                if (this.token.length <= 0) {
  
                  // aqui mensaje
                  console.log("el token nose ha generado");
                } else {
  
                  localStorage.setItem("Token", token);
                  setTimeout(() => {
                   this.navCtrl.push(PrincipalPage);
                  }, 2000);
                }
              },
              error => {
                var errorMessage = <any>error;
                if (errorMessage) {
                  try {
                    var body = JSON.parse(error._body);
                    errorMessage = body.message;
                  } catch(error){ errorMessage = "No connection try later."; }
                  setTimeout(() => {
                    this.showAlert(errorMessage);
                  }, 2000);
                  console.log(errorMessage);
                }
              }
            );
            //fin
          }
        },
        error => {
          var errorMessage = <any>error;
          if (errorMessage) {
            try {
              var body = JSON.parse(error._body);
              errorMessage = body.message;
            } catch(error){ errorMessage = "No connection try later."; }
            setTimeout(() => {
              this.showAlert(errorMessage);
            }, 3000);
            console.log(errorMessage);
          }
        }
      );
  
    
  }

  verificarUsuario() {
    let loading = this.loadingCtrl.create({
      content: "Espere estamos verificando sus datos"
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 3000);

  }

  
  showAlert(errorr) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: errorr,
      buttons: ['OK']
    });
    alert.present();
  }
}
