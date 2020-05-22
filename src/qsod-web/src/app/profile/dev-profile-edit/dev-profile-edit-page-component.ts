import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../services/account.service';
import {User} from '../../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dev-profile-edit-page-component',
  templateUrl: './dev-profile-edit-page-component.html',
  styleUrls: ['./dev-profile-edit-page-component.css']
})

export class DevProfileEditPageComponent implements OnInit, OnDestroy{

  profile: User;
  newProfileForm: FormGroup;


  constructor( private route: ActivatedRoute,
               private accountService: AccountService,
               private formBuilder: FormBuilder
  ){
    this.newProfileForm = formBuilder.group({
      name: '',
      email: '',
      description: '',
      phone: '',
      avatar: '',
      cv: '',
      nationality: '',
      residency: '',
      jobStatus: '',
      origin: '',
      founded: 0,
      country: ''
    });
  }

  ngOnInit(): void {
    this.profile = this.accountService.getUser();
  }

  ngOnDestroy(): void {
  }

  async onSubmit({name,
                 email,
                 description,
                 phone,
                 avatar,
                 cv,
                 nationality,
                 residency,
                 jobStatus,
                 origin,
                 founded,
                 country}: {name: string, email: string, description: string, phone: string,
    avatar: string, cv: string, nationality: string, residency: string, jobStatus: string,
    origin: string, founded: number, country: string}){
    const newProfile = {
      id: this.profile.id,
      nameSurname: name,
      email: email,
      description: description,
      phone: phone,
      avatar: avatar,
      cv: cv,
      nationality: nationality,
      residency: residency,
      jobStatus: jobStatus,
      origin: origin,
      founded: founded,
      country: country,
    };

    this.profile = await this.accountService.updateProfile(newProfile);
  }



}
