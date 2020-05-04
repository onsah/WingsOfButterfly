import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, ActivatedRouteSnapshot, NavigationStart, ActivatedRoute } from '@angular/router';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  // Connect to LoginServices-
  isLoggedIn(): boolean {
    return true;
  }
}
