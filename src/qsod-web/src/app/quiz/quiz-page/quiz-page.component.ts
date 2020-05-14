import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  quiz: Quiz;

  constructor() {
    this.quiz = Quiz.getDefault();
    // TODO: retrieve questions
  }

  ngOnInit(): void {
  }
}
