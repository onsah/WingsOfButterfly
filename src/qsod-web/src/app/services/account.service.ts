import { Injectable } from '@angular/core';

import { User, JobSituation, ICV, UserType } from '../models/user';
import { IAccountService, LoginResult, LoginError, RegisterResult, RegisterError } from '../interfaces/IAccountService';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';
import { QuizService } from './quiz.service';

@Injectable({
  providedIn: 'root'
})
// Dummy version
// TODO: connect to database
export class AccountService implements IAccountService {
  private user: User;

  constructor(
    private apiClient: ApiService,
    private quizService: QuizService,
  ) {
    this.user = null;
  }

  public async login(email: string, password: string): Promise<LoginResult> {
    if (email === '' || password === '') {
      console.warn('email or password is empty');
      return { tag: 'error', error: LoginError.EmailOrPasswordEmpty };
    }

    /* this.user = new User(email, password);

    this.user.type = UserType.Admin;

    console.warn('login is disabled for development. Enable it before demo');

    this.quizService.loadQuizzes();

    return { tag: "value", value: this.user }; */

    try {
      let response = await this.apiClient.login(email, password);
      
      if (response !== null) {
        this.user = response;
        console.log("user: ", this.user);
        return { tag:"value", value: this.user };
      } else {
        return { tag: "error", error: LoginError.Unkown };
      }
    } catch (error) {
        return { tag: "error", error: LoginError.Unkown };
    }
  }

  isLoggedIn = (): boolean => this.user !== null;

  getUserType = (): UserType => this.user?.role;

  getUsername = (): string => this.user?.username;

  logout(): void {
    throw new Error('Method not implemented.');
  }

  async registerDeveloper(
    email: string,
    password: string,
    username: string,
    JobSituation: JobSituation,
    contactInfo: string,
    description?: string,
     cv?: ICV, // büyük ihtimal uçacak
     avatar?: Uint8Array
  ): Promise<RegisterResult> {
    let response = await this.apiClient.register(email, username, password, UserType.Developer);

    if (response) {
      return { tag: "value", value: true };
    } else {
      return { tag: "error", error: RegisterError.Unkown };
    }
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

  deleteAccount(): Promise<boolean> {
    return this.apiClient.delete(this.user.id);
  }
}
