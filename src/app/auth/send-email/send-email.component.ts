import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],

  providers: [AuthService]
})
export class SendEmailComponent implements OnInit {
  public user$:Observable<any>= this.authService.authfirebase.user
  
  constructor(private authService: AuthService) { }
  providers: [AuthenticationService],
})
export class SendEmailComponent implements OnInit {
  public user: Observable<any> = this.authService.afAuth.user;
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onSendEmail(): void {
    this.authService.sendVerificationEmail();
  }
}
