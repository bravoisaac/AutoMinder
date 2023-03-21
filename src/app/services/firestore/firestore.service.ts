import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  creatDoc() {
    this.firestore.collection('Pruebas');
  }

  getCollection() {
    console.log('estoy probando firebase');

    this.firestore
      .collection('Pruebas')
      .valueChanges()
      .subscribe(
        (res) => {
          console.log('res -> ', res);
        },
        (err) => console.log(err)
      );
  }
}
