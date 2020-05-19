import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizReportPageComponent } from './quiz-report-page.component';

describe('QuizReportPageComponent', () => {
  let component: QuizReportPageComponent;
  let fixture: ComponentFixture<QuizReportPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizReportPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
