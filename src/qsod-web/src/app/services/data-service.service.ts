import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { QuizService } from './quiz.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _quiz: Quiz;
  private _questions: Question[];

  get quiz() { return this._quiz; }
  set quiz(quiz: Quiz) {
    this._quiz = quiz;
    this._questions = null;
  }

  constructor(
    private quizService: QuizService,
  ) { }

  /**
   * Receives the questions of the particular quiz
   */
  public async requestQuestions(): Promise<Question[]> {
    if (this.quiz === null) {
      throw new Error('quiz can\'t be null');
    }

    if (this._questions === null) {
      this._questions = await this.quizService.receiveQuestions(this.quiz);
    }

    return this._questions;
  }  
}
