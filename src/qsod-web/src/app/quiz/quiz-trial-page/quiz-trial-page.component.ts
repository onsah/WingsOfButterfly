import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { Trial } from 'src/app/models/trial';
import { Question, Option } from 'src/app/models/question';
import { MatDialog } from '@angular/material/dialog';
import { QuestionTrialDialogComponent } from './question-trial-dialog/question-trial-dialog.component';

@Component({
  selector: 'app-quiz-trial-page',
  templateUrl: './quiz-trial-page.component.html',
  styleUrls: ['./quiz-trial-page.component.css']
})
export class QuizTrialPageComponent implements OnInit {
  public quiz: Quiz;
  public questions: Question[];
  public trial: Trial;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    console.warn('Retrieve from the service');

    this.quiz = Quiz.getDefault();
    this.questions = [
      Question.getDefault(),
      Question.getDefault(),
      Question.getDefault(),
      Question.getDefault(),
      Question.getDefault(),
    ];
    this.trial = Trial.getDefault();
  }

  get successPercentage() {
    return (this.trial.successRate * 100).toFixed(0).toString() + '%';
  }

  isQuestionCorrect(index: number) {
    return this.questions[index].correctOption === this.trial.choosenOptions[index];
  }

  showQuestionDetails(question: Question, choosenOption: Option, index: number) {
    this.dialog.open(QuestionTrialDialogComponent, { width: '600px', data: { question, choosenOption, questionIndex: index  } })
  }
}
