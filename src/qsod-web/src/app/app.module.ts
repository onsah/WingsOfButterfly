import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule, MatTab } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome/welcome-page/welcome-page.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { QuizPageComponent } from './quiz/quiz-page/quiz-page.component';
import { RegisterPageComponent } from './registration/register-page/register-page.component';
import { QuizReportPageComponent } from './quiz/quiz-report-page/quiz-report-page.component';
import { QuizDetailsComponent } from './quiz/quiz-details/quiz-details.component';
import { TrialsComponent } from './quiz/trials/trials.component';
import { DevMainPageComponent } from './main/dev-main-page/dev-main-page.component';
import { AdminMainPageComponent } from './main/admin-main-page/admin-main-page.component';
import { CompanyMainPageComponent } from './main/company-main-page/company-main-page.component';
import { QuizCreateComponent } from './quiz/quiz-create/quiz-create.component';
import { QuizTrialPageComponent } from './quiz/quiz-trial-page/quiz-trial-page.component';
import { MinuteSecondsPipe } from './utility/date-pipe.pipe';
import { QuestionTrialDialogComponent } from './quiz/quiz-trial-page/question-trial-dialog/question-trial-dialog.component';
import { DevProfilePageComponent } from './profile/dev-profile/dev-profile-page-component';
import { DevProfileEditPageComponent} from './profile/dev-profile-edit/dev-profile-edit-page-component';
import {ProfilePageComponent} from './profile/profile-page/profile-page.component';
import {CompanyProfilePageComponent} from './profile/company-profile/company-profile-page.component';
import {CompanyProfileEditPageComponent} from './profile/company-profile-edit/company-profile-edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    MainPageComponent,
    ToolbarComponent,
    QuizPageComponent,
    RegisterPageComponent,
    QuizReportPageComponent,
    QuizDetailsComponent,
    TrialsComponent,
    DevMainPageComponent,
    AdminMainPageComponent,
    CompanyMainPageComponent,
    QuizCreateComponent,
    QuizTrialPageComponent,
    MinuteSecondsPipe,
    QuestionTrialDialogComponent,
    DevProfilePageComponent,
    DevProfileEditPageComponent,
    CompanyProfilePageComponent,
    ProfilePageComponent,
    CompanyProfileEditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
