import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponent } from './welcome/welcome-page/welcome-page.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { 
    path: '', 
    component: WelcomePageComponent,
  },
  { 
    path: 'main',
    component: MainPageComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
