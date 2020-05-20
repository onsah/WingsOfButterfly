import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserType } from '../models/user';

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

  async register(email: string, username: string, password: string, userType: UserType): Promise<boolean> {
    let url = this.LOGIN_ENDPOINT;

    let body = {
      email,
      password,
      username,
      role: userType.toString(),
    };

    return await this.post<boolean>(url, body, {});
  }
  /**
   * Deletes the account
   */
  async delete(id: number): Promise<boolean> {
    let url = this.LOGIN_ENDPOINT + "/" + id;

    return await this.http.delete<boolean>(url).toPromise();
  }

  private post = async <T> (url: string, body: {}, options: {}): Promise<T> => {
    console.log(`making post request ${url}`);

    return await this.http.post<T>(url, body, options).toPromise();
  }

  private get = async <T> (url: string, options: {}): Promise<T> => {
    console.log(`making get request ${url}`);

    return this.http.get<T>(url, options).toPromise();
  };
}
