import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
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
