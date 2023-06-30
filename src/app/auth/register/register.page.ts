import { Auth, User } from '@angular/fire/auth';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { AuthService } from './../../services/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userCredentials = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    private firestore: FirestoreService,
    private router: Router,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService
  ) {}
  ngOnInit() {}

  getPrueba() {
    this.firestore.getCollection();
  }

  registrar() {
    console.log('datos -> ', this.userCredentials)
  }

}