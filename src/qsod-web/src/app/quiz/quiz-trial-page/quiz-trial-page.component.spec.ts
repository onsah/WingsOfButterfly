import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTrialPageComponent } from './quiz-trial-page.component';

describe('QuizTrialPageComponent', () => {
  let component: QuizTrialPageComponent;
  let fixture: ComponentFixture<QuizTrialPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTrialPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTrialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
