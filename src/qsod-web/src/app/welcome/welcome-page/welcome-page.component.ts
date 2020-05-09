import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginError } from 'src/app/interfaces/IAccountService';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  loginForm: FormGroup;

  readonly QUOTES = [
    'böyle uygulama görmedim!',
    'Buraya gelmeden önce programlama bilmiyordum, şimdi Apple\'da kod yazıyorum',
    'quote3',
    'quote4',
    'quote5',
    'quote6',
    'quote7',
  ];
  
  constructor(
    private snackBar: MatSnackBar,
    private accService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.loginForm = formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
    // TODO: navigate to main page if logged in
  }

  showMessage(message: string): void {
    this.snackBar.open(message, 'close', { duration: 2000 });
  }

  onSubmit({ email, password }: { email: string, password: string }) {
    let result = this.accService.login(email, password);

    switch (result.tag) {
      case "value": 
        this.router.navigate(['main']);
        break;
      case "error": 
        switch (result.error) {
          case LoginError.EmailOrPasswordEmpty:
              this.showMessage("Email or password is empty");
            break;
          case LoginError.EmailAlreadyTaken:
              this.showMessage("This email is already used for another account");
            break;
          case LoginError.UsernameNotValid:
              this.showMessage("The username is not valid");
            break;
          case LoginError.PasswordNotValid:
              this.showMessage("The password is not valid");
            break;
          default:
              this.showMessage("Unkown login error occured!");
            break;
        }
    }
  }
}