import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { IQuizService } from '../interfaces/IQuizService';
import { Tag, Difficulty } from '../models/types';
import { Question, Option } from '../models/question';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements IQuizService {
  private _tags: Tag[] = [];
  private dataStore: Quiz[] = [];
  private _quizzes = new BehaviorSubject<Quiz[]>([]);

  constructor(
    private apiService: ApiService
  ) { 

    // TODO: remove these lines when implemented
    this._tags = [
      'a',
      'b',
      'c',
      'd'
    ];

    this.addQuiz(Quiz.withTags([
      'a', 'b'
    ]));
    this.addQuiz(Quiz.withTags([
      'a'
    ]));
    this.addQuiz(Quiz.withTags([
      'c'
    ]));
    this.addQuiz(Quiz.withTags([
      'a', 'd'
    ]));
    this.addQuiz(Quiz.withTags([
      'c', 'd'
    ]));
  }

  get quizzes() { return this._quizzes.asObservable(); }
  get tags() { return this._tags; }

  getAllQuizzes(): boolean {
    // TODO: request

    throw new Error("Not implemented");
  }

  receiveAllQuizzes(): void {
    throw new Error("Method not implemented.");
  }

  receiveQuizzesOfDev(devID: string): void {
    throw new Error("Method not implemented.");
  }

  receiveQuizzesByTag(tags: string[]): void {
    throw new Error("Method not implemented.");
  }

  async receiveQuestions(quiz: Quiz): Promise<Question[]> {
    console.warn('Connect to the database. Currently sending mock questions');

    return [
      Question.getDefault(),
      Question.getDefault(1),
      Question.getDefault(2),
      Question.getDefault(3),
      Question.getDefault(4),
    ];
  }

  // Used for debug purposes
  addQuiz(quiz: Quiz): void {
    this.dataStore.push(quiz);
    this._quizzes.next(this.dataStore);
  }

  removeQuiz(): void {
    this.dataStore.pop();
    this._quizzes.next(this.dataStore);
  }
}
