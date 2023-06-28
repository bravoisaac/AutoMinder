import { AuthService } from './../../services/authentication/auth.service';
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
    private authService: AuthService,
    private AuthenticationService: AuthService,
    
  ) {}

  credentials = {
    correo: null,
    password: null
  }

  ngOnInit() {
  }

  async login(){
    console.log('credentials -> ', this.credentials)
    const res = await this.AuthenticationService.login(this.credentials.correo, this.credentials.password).catch(error => {
      console.log('error')
    })
    if (res) {
      console.log('res -> ', res)
    }
  }
}
