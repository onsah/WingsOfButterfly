import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegisterError } from 'src/app/interfaces/IAccountService';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent{
  loginForm: FormGroup;


  constructor(
    private snackBar: MatSnackBar,
    private accService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = formBuilder.group({
      email: '',
      password: '',
      passwordRepeat: '',
    });
  }

  showMessage(message: string): void {
    this.snackBar.open(message, 'close', { duration: 2000 });
  }

  onSubmit({ email, password, passwordRepeat }: { email: string, password: string, passwordRepeat: string }) {

    const result = this.accService.registerDeveloper(email, password, passwordRepeat);
    switch (result.tag) {
      case 'value':
        this.router.navigate(['main']); // TODO
        break;
      case 'error':
        switch (result.error) {
          case RegisterError.EmailOrPasswordEmpty:
              this.showMessage("Email or password is empty");
            break;
          case RegisterError.EmailAlreadyTaken:
              this.showMessage("This email is already used for another account");
            break;
          case RegisterError.UsernameNotValid:
              this.showMessage("The username is not valid");
            break;
          case RegisterError.PasswordNotValid:
              this.showMessage("The password is not valid");
            break;
          case RegisterError.PasswordsDoNotMatch:
              this.showMessage("Passwords do not match");
          default:
              this.showMessage("Unkown register error occured!");
            break;
        }
    }
  }
}
