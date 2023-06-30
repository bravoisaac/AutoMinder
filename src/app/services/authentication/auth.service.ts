import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router,  public authfirebase: AngularFireAuth) { }

  
  login(correo: string, password: string) {
    return this.authfirebase.signInWithEmailAndPassword(correo, password)
  }

  logout() {
    this.authfirebase.signOut();
  }

  // Change this function
  register(user: any): any {
    console.log('Te falto poner esta funcion para que no diera problemas al inciar la aplicacion sin ningun problema')
  }

  // Chanbe this function
  sendVerificationEmail() {
    console.log('Te falto poner esta funcion para que no diera problemas al inciar la aplicacion sin ningun problema')
  }
}

