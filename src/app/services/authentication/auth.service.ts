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

}

