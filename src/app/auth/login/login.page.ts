import { AuthService } from './../../services/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InteractionService } from '../../services/authentication/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private AuthenticationService: AuthService,
    private interaction: InteractionService
  ) {}

  credentials = {
    correo: null,
    password: null
  }

  ngOnInit() {
  }

  async login(){
    await this.interaction.presentLoading('Ingresando......')
    console.log('credentials -> ', this.credentials)
    const res = await this.AuthenticationService.login(this.credentials.correo, this.credentials.password).catch(error => {
      console.log('error')
      this.router.navigate(['/login'])
      this.interaction.closeLoading();
      this.interaction.presentToast('usuario o contraseña incorrecto')
    })
    if (res) {
      console.log('res -> ', res)
      this.interaction.closeLoading();
      this.interaction.presentToast('Ingresado correctamente')
      this.router.navigate(['/tab1'])
    }
  }
}
