import { Component, OnInit } from '@angular/core';
import { Quiz, QuizType } from 'src/app/models/quiz';
import { Difficulty } from 'src/app/models/types';
import { Observable } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  selectedTags: string[] = [];

  constructor(
    public quizService: QuizService
  ) { }

  ngOnInit(): void {
  }

  
  addQuiz = () => { this.quizService.addQuiz(Quiz.getDefault()); }
}
