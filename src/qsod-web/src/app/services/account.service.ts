import { Injectable } from '@angular/core';

import { User, JobSituation, ICV, UserType } from '../models/user';
import { IAccountService, LoginResult, LoginError } from '../interfaces/IAccountService';

@Injectable({
  providedIn: 'root'
})
// Dummy version
// TODO: connect to database
export class AccountService implements IAccountService {
  private user: User;

  constructor() {
    this.user = null;
  }

  public login(email: string, password: string): LoginResult {
    if (email === '' || password === '') {
      console.warn('email or password is empty');
      return { tag: 'error', error: LoginError.EmailOrPasswordEmpty };
    }
    // TODO implement
    this.user = new User(email, password);

    return { tag: 'value', value: this.user };
  }

  isLoggedIn = (): boolean => this.user !== null;

  getUserType = (): UserType => this.user?.type;

  logout(): void {
    throw new Error('Method not implemented.');
  }

  registerDeveloper(
    email: string,
    password: string,
    passwordRepeat: string,
    //username: string,
    //JobSituation: JobSituation, //şimdilik comment
    //contactInfo: string,
    //description?: string,
    // cv?: ICV, // büyük ihtimal uçacak
    // avatar?: Uint8Array
  ): boolean {
    throw new Error('Method not implemented.');
  }

  registerCompany(email: string, password: string, username: string, description: string, contactInfo: string, logo: Uint8Array): boolean {
    throw new Error('Method not implemented.');
  }

  registerAdmin(email: string, password: string, username: string): boolean {
    throw new Error('Method not implemented.');
  }

  updateProfile(email: string, password: string, newProfile: User): boolean {
    throw new Error('Method not implemented.');
  }
}
