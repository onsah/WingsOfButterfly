import { Injectable } from '@angular/core';

import { User, JobSituation, ICV } from '../models/user';
import { IAccountService } from '../interfaces/IAccountService';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

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

  public login(email: string, password: string): User {
    if (email === '' || password === '') {
      console.warn('email or password is empty');
      return null;
    }
    // TODO implement
    this.user = new User(email, password);

    return this.user;
  }

  isLoggedIn = (): boolean => this.user !== null;

  getProfile = (): User => this.user;

  logout(): void {
    throw new Error("Method not implemented.");
  }

  registerDeveloper(
    email: string, 
    password: string, 
    username: string, 
    JobSituation: JobSituation, 
    contactInfo: string, 
    description?: string, 
    cv?: ICV, 
    avatar?: Uint8Array
  ): boolean {
    throw new Error("Method not implemented.");
  }

  registerCompany(email: string, password: string, username: string, description: string, contactInfo: string, logo: Uint8Array): boolean {
    throw new Error("Method not implemented.");
  }

  registerAdmin(email: string, password: string, username: string): boolean {
    throw new Error("Method not implemented.");
  }

  updateProfile(email: string, password: string, newProfile: User): boolean {
    throw new Error("Method not implemented.");
  }
}
