import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService} from '../../services/account.service';
import {User} from '../../models/user';


@Component({
  selector: 'company-profile-edit-page.component',
  templateUrl: './company-profile-edit-page.component.html',
  styleUrls: ['./company-profile-edit-page.component.css']
})

export class CompanyProfileEditPageComponent implements OnInit, OnDestroy{

  profile: User;

  constructor( private route: ActivatedRoute,
               private accountService: AccountService
  ){}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }



}
