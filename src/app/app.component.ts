import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import {CarcarScriptpsService} from './carcar-scriptps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  usuario ={
    email:'',
    password:''
  }

  constructor(private _CargaScripts:CarcarScriptpsService, private authService:AuthService){
    _CargaScripts.carga(["script"]);

  }
  Ingresar(){
    console.log(this.usuario);
    const{email,password}=this.usuario;
    this.authService.register(email,password).then(res =>{
      console.log("Se registro ",res);
    })


  }
  IngresarConGoogle(){
    const{email,password}=this.usuario;
    this.authService.loginWithGoogle(email,password).then(res =>{
      console.log("Se registro ",res)
    })}


  title = 'semana7';
}
