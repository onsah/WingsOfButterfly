import { Injectable } from '@angular/core';
import { LoginResult } from '../interfaces/IAccountService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Configuartion
  readonly URL = "http://localhost";
  readonly PORT = "8001";
  readonly BASE_ENDPOINT = "/api";
  readonly LOGIN_ENDPOINT = this.URL + ":" + this.PORT + this.BASE_ENDPOINT + "/user";

  constructor(
    private http: HttpClient
  ) { }

  /**
   * format is /user/{email}/{password}
   * @param email 
   * @param password 
   */
  async login(email: string, password: string) {
      let url = this.LOGIN_ENDPOINT + "/" + email + "/" + password;
      let options =  { 
        observe: 'body', 
        responseType: 'json',
      };

      // TODO: change to LoginResponse
      let resp = await this.get<User>(url, options);

      return resp;
  }

  private get = async <T> (url: string, options: {}): Promise<T> => {
    console.log(`making request ${url}`);

    return this.http.get<T>(url, options).toPromise();
  };
}
