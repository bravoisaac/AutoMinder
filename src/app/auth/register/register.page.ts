import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
  }

  getPrueba()
{
  this.firestore.getCollection()
}
}
