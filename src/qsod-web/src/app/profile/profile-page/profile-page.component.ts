import { Component, OnInit } from '@angular/core';
import {UserType, User} from '../../models/user';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor( private accountService: AccountService ) { }

  get isDeveloper() {
    return this.accountService.getUserType() === UserType.Developer;
  }

  get isAdmin() {
    return this.accountService.getUserType() === UserType.Admin;
  }

  get isCompany() {
    return this.accountService.getUserType() === UserType.Company;
  }

  ngOnInit(): void {
  }

}
