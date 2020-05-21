import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../../models/profile';
import {AccountService} from '../../services/account.service';


@Component({
  selector: 'dev-profile-page-component',
  templateUrl: './dev-profile-page-component.html',
  styleUrls: ['./dev-profile-page-component.css']
})

export class DevProfilePageComponent implements OnInit, OnDestroy{

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
