import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { UserType } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  // Connect to LoginServices-
  isLoggedIn = (): boolean => this.accountService.isLoggedIn();

  // TODO: implement
  isDeveloper = (): boolean => this.accountService.getUserType() === UserType.Developer;

  getUsername = (): string  => this.accountService.getUsername();

  private currentPage() {
    return this.router.url;
  }

  isMainPage() {
    return this.currentPage() === '/main';
  }

  isTrialsPage() {
    return this.currentPage() === '/quiz-trials';
  }
}
