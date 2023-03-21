import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth) {}

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
  register({ email, password }) {
    createUserWithEmailAndPassword(this.auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        console.log(user);
      }
    );
  }
  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
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
