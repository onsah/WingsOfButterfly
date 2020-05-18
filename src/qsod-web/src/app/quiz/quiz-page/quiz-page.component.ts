import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { Question, Option } from 'src/app/models/question';
import { Difficulty } from 'src/app/models/types';
import { DataService } from 'src/app/services/data-service.service';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  @ViewChild('tabGroup')
  tabGroupRef: MatTabGroup;

  quiz: Quiz;
  questions: Question[] = [
    Question.getDefault(),
  ];

  constructor( 
    private dataService: DataService,
  ) {
    this.quiz = dataService.quiz;

    dataService.requestQuestions()
      .then(questions => this.questions = questions);
  }

  ngOnInit(): void {
  }

  onNextQuestion() {
    // TODO: check if anything is selected


    let i = this.tabGroupRef.selectedIndex;
    this.tabGroupRef.selectedIndex = i + 1;
  }
}
