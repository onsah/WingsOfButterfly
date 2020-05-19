import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponent } from './welcome/welcome-page/welcome-page.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { QuizPageComponent } from './quiz/quiz-page/quiz-page.component';
import { RegisterPageComponent } from './registration/register-page/register-page.component';
import { Quiz } from './models/quiz';
import { QuizReportPageComponent } from './quiz/quiz-report-page/quiz-report-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
