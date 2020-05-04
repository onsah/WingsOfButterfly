import { Injectable } from '@angular/core';

import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private account: Account;

  constructor() {
    this.account = null;
  }

  public login(email: string, password: string): boolean {
    // TODO implement
    this.account = {
      email,
      password,
      username: null,
    };

    return true;
  }

  public isLoggedIn(): boolean {
    return this.account !== null;
  }
}
