import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { UserType } from '../models/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void { }

  // Connect to LoginServices-
  isLoggedIn = (): boolean => this.accountService.isLoggedIn();

  // TODO: implement
  isDeveloper = (): boolean => this.accountService.getUserType() === UserType.Developer;

  getUsername = (): string  => this.accountService.getUsername();
}
