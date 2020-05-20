import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTrialDialogComponent } from './question-trial-dialog.component';

describe('QuestionTrialDialogComponent', () => {
  let component: QuestionTrialDialogComponent;
  let fixture: ComponentFixture<QuestionTrialDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTrialDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTrialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
