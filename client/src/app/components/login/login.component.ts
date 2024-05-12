import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private userSvc: UserService, private _router: Router) {
  }

  userName: string = '';
  userPassword: string = '';

  passwordValidation: string = '';

  contact() {
    this.passwordValidation = this.userSvc.passwordValidator(this.userPassword!)
    if (this.passwordValidation === '') {
      this.userSvc.getUserFromServer(this.userName!, this.userPassword!).subscribe((res: any) => {
        console.log(JSON.stringify(res));
        if (res) {
          localStorage.setItem('userDetails', JSON.stringify(res));
          this._router.navigate(['/jobs']);
        }
        else {
          alert('We dont know you...');
        }
      });
    }
  }
}
