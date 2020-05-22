import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponent } from './welcome/welcome-page/welcome-page.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { QuizPageComponent } from './quiz/quiz-page/quiz-page.component';
import { RegisterPageComponent } from './registration/register-page/register-page.component';
import { QuizReportPageComponent } from './quiz/quiz-report-page/quiz-report-page.component';
import { TrialsComponent } from './quiz/trials/trials.component';
import { LoginDirectService } from './services/login-direct.service';
import { QuizCreateComponent } from './quiz/quiz-create/quiz-create.component';
import { QuizTrialPageComponent } from './quiz/quiz-trial-page/quiz-trial-page.component';
import { DevProfilePageComponent } from './profile/dev-profile/dev-profile-page-component';
import {DevProfileEditPageComponent} from './profile/dev-profile-edit/dev-profile-edit-page-component';
import {ProfilePageComponent} from './profile/profile-page/profile-page.component';
import {CompanyProfileEditPageComponent} from './profile/company-profile-edit/company-profile-edit-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
    canActivate: [
      LoginDirectService
    ]
  },
  {
    path: 'main',
    component: MainPageComponent,
    canActivate: [
      AuthGuardService
    ],
  },
  {
    path: 'quiz',
    component: QuizPageComponent
  },
  {
    path: 'registration',
    component: RegisterPageComponent,
  },
  {
    path: 'quiz-report',
    component: QuizReportPageComponent,
  },
  {
    path: 'quiz-trials',
    component: TrialsComponent,
  },
  {
    path: 'quiz-admin/:isEditMode',
    component: QuizCreateComponent
  },
  {
    path: 'quiz-trial',
    component: QuizTrialPageComponent,
  },
  {
    path: 'dev-profile-page',
    component: DevProfilePageComponent,
  },
  {
    path: 'dev-profile-edit',
    component: DevProfileEditPageComponent,
  },
  {
    path: 'profile-page',
    component: ProfilePageComponent,
  },
  {
    path: 'company-profile-edit',
    component: CompanyProfileEditPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
