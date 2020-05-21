import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { Trial } from 'src/app/models/trial';
import { Question, Option } from 'src/app/models/question';
import { MatDialog } from '@angular/material/dialog';
import { QuestionTrialDialogComponent } from './question-trial-dialog/question-trial-dialog.component';
import { Helper } from 'src/app/utility/helper';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-quiz-trial-page',
  templateUrl: './quiz-trial-page.component.html',
  styleUrls: ['./quiz-trial-page.component.css']
})
export class QuizTrialPageComponent implements OnInit {
  public quiz: Quiz = Quiz.getDefault();
  public questions: Question[] = [];
  public trial: Trial = Trial.getDefault();

  constructor(
    private dialog: MatDialog,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    console.warn('Retrieve from the service');

    /* this.quiz = Quiz.getDefault();
    this.questions = [
      Question.getDefault(),
      Question.getDefault(),
      Question.getDefault(),
      Question.getDefault(),
      Question.getDefault(),
    ];
    this.trial = Trial.getDefault(); */

    this.quiz = this.dataService.quiz;
    this.questions = this.dataService.questions;
    this.trial = this.dataService.trial;
  }

  get successPercentage() {
    return (this.trial.successRate * 100).toFixed(0).toString() + '%';
  }

  isQuestionCorrect(index: number) {
    return Helper.arrayToOption(this.questions[index].correctOptions) === Helper.arrayToOption(this.trial.choosenOptions[index]);
  }

  showQuestionDetails(question: Question, choosenOption: boolean[], index: number) {
    this.dialog.open(QuestionTrialDialogComponent, { 
      width: '600px', 
      data: { 
        question, 
        choosenOption: Helper.arrayToOption(choosenOption), 
        questionIndex: index  
      } 
    })
  }
}
