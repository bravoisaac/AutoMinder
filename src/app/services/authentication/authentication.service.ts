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
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth, private router: Router,  public afAuth: AngularFireAuth) {}

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  // async register({ email, password }) {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       this.auth,
  //       email,
  //       password
  //     );
  //     return user;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }
  async register({ email, password }) {
    createUserWithEmailAndPassword(this.auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        this.sendVerificationEmail();
        console.log(user);
      }
    );
  }
  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      if (user && user.user.emailVerified){
        this.router.navigate(['/home']);
      } else if (user){
        this.router.navigate(['/verification-email']);
      } else {
        this.router.navigate(['/register']);
      }
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  logout() {
    return signOut(this.auth);
  }
}
