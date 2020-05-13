import { Component, OnInit } from '@angular/core';
import { Quiz, QuizType } from 'src/app/models/quiz';
import { Difficulty } from 'src/app/models/types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  SelectedTags: string[] = [];
  
  Quizzes: Quiz[] = [
    Quiz.getDefault(),
    Quiz.getDefault(),
    Quiz.getDefault(),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
