import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, ActivatedRouteSnapshot, NavigationStart, ActivatedRoute } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { AccountService } from '../services/account.service';

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
  isLoggedIn(): boolean {
    return this.accountService.isLoggedIn();
  }
}
