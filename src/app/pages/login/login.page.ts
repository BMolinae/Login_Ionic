import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonInput, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  modeloUsuario: String = '';
  modeloContrasena: String = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  Ingresar(){
    if (this.validarInputs()) {
      this.navCtrl.navigateForward('/principal', {
        queryParams: { usuario: this.modeloUsuario }
      });
    } else {
      alert('Por favor, complete los campos correctamente.');
    }
  }

  validarInputs(): boolean {
    return (
      this.modeloUsuario.length >= 3 &&
      this.modeloUsuario.length <= 8 &&
      this.modeloContrasena.length === 4
    );
  }

}
