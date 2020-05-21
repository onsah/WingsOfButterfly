import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../../models/profile';
import {AccountService} from '../../services/account.service';


@Component({
  selector: 'dev-profile-edit-page-component',
  templateUrl: './dev-profile-edit-page-component.html',
  styleUrls: ['./dev-profile-edit-page-component.css']
})

export class DevProfileEditPageComponent implements OnInit, OnDestroy{

  profile: Profile;

  constructor( private route: ActivatedRoute,
               private accountService: AccountService
  ){
    this.profile = Profile.getDevDefault();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }



}
