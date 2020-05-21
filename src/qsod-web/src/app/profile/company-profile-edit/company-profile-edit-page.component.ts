import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../../models/profile';
import {AccountService} from '../../services/account.service';


@Component({
  selector: 'company-profile-edit-page.component',
  templateUrl: './company-profile-edit-page.component.html',
  styleUrls: ['./company-profile-edit-page.component.css']
})

export class CompanyProfileEditPageComponent implements OnInit, OnDestroy{

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
