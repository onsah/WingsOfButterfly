import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../services/account.service';
import {User, UserType} from '../../models/user';


@Component({
  selector: 'dev-profile-page-component',
  templateUrl: './dev-profile-page-component.html',
  styleUrls: ['./dev-profile-page-component.css']
})

export class DevProfilePageComponent implements OnInit, OnDestroy{

  profile: User;

  constructor( private route: ActivatedRoute,
               private accountService: AccountService
  ){}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  get isDeveloper() {
    return this.accountService.getUserType() === UserType.Developer;
  }

  get isAdmin() {
    return this.accountService.getUserType() === UserType.Admin;
  }

  get isCompany() {
    return this.accountService.getUserType() === UserType.Company;
  }

}
