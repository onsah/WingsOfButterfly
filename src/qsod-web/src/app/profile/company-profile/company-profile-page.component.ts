import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../services/account.service';
import {User, UserType} from '../../models/user';


@Component({
  selector: 'company-profile-page-component',
  templateUrl: './company-profile-page.component.html',
  styleUrls: ['./company-profile-page.component.css']
})

export class CompanyProfilePageComponent implements OnInit, OnDestroy{

  profile: User;

  constructor( private route: ActivatedRoute,
               private accountService: AccountService

  ){}

  ngOnInit(): void {
    this.profile = this.accountService.getUser();
  }

  ngOnDestroy(): void {
  }

  get isCompany() {
    return this.accountService.getUserType() === UserType.Company;
  }



}
