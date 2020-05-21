import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../../models/profile';
import {AccountService} from '../../services/account.service';


@Component({
  selector: 'company-profile-page-component',
  templateUrl: './company-profile-page.component.html',
  styleUrls: ['./company-profile-page.component.css']
})

export class CompanyProfilePageComponent implements OnInit, OnDestroy{

  profile: Profile;

  constructor( private route: ActivatedRoute,
               private accountService: AccountService
  ){
    this.profile = Profile.getCompanyDefault();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }



}
