// @ts-ignore
import { ApiService } from './api.service';
import {ProfileType} from '../models/types';
import {Injectable} from '@angular/core';
import {Profile} from '../models/profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  /*
  private name: string;
  private email: string;
  private nationality: string;
  private residency: string;
  private jobStatus: string;
  private description: string;
  */
  private profile: Profile;

  constructor(
    private apiService: ApiService
  ) {}

  public loadProfile(){
    this.profile = Profile.getDevDefault();
  }

  // TODO DB connections

}
