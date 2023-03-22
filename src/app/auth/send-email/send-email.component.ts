import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
  providers: [AuthenticationService]
})
export class SendEmailComponent implements OnInit {
  public user$:Observable<any>= this.authSvc.afAuth.user
  
  constructor(private authSvc: AuthService) { }

  ngOnInit():  void{
}

  onSendEmail(): void{
    this.authSvc.sendVerificationEmail();
  }

}
