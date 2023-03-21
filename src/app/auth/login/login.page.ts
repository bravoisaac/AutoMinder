import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private authService: AuthenticationService
  ) {}

  // getEmail() {
  //   return this.credentials.get('email');
  // }
  // getPassword() {
  //   return this.credetials.get('password');
  // }

  ngOnInit() {
    // this.credetials = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    // });
  }

  // async login() {
  //   const loading = await this.loadingController.create();
  //   await loading.present();

  //   const user = await this.authService.login(this.credentials.value);
  //   await loading.dismiss();

  //   if (user) {
  //     this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
  //   } else {
  //     this.showAlert(
  //       'Inicio de sesion a fallado,',
  //       'Por favor volver a intentar'
  //     );
  //   }
  // }

  // async showAlert(header, message) {
  //   const alert = await this.alertController.create({
  //     header,
  //     message,
  //     buttons: ['Ok'],
  //   });
  //   await alert.present();
  // }
}
