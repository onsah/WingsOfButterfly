import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { IQuizService } from '../interfaces/IQuizService';
import { Tag, Difficulty, DevID } from '../models/types';
import { Question, Option } from '../models/question';
import { ApiService } from './api.service';
import { Trial } from '../models/trial';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements IQuizService {
  private _tags: Tag[] = [];
  private quizzesDataStore: Quiz[] = [];
  private quizzesWithTrialsStore: { quiz: Quiz, trials: Trial[] }[];
  private _quizzes = new BehaviorSubject<Quiz[]>([]);
  private _quizzesWithTrials = new BehaviorSubject<{ quiz: Quiz, trials: Trial[] }[]>([]);

  constructor(
    private apiService: ApiService
  ) { }

  public loadQuizzes() {
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

    this.quizzesWithTrialsStore = [
      { quiz: Quiz.withTags(['a', 'b']), trials: [ Trial.withTrialNo(1), Trial.withTrialNo(2) ] },
      { quiz: Quiz.withTags(['a']), trials: [ Trial.withTrialNo(1), Trial.withTrialNo(2), Trial.withTrialNo(3) ] },
    ];
    this._quizzesWithTrials.next(this.quizzesWithTrialsStore);

    console.warn('TODO: make async requests to the database for all quizzes and the quizzes with trials');
  }

  get quizzes() { return this._quizzes.asObservable(); }
  get quizzesWithTrials() { return this._quizzesWithTrials.asObservable(); }
  get tags() { return this._tags; }

  receiveQuizzes(filter: { tags: Tag[], searchText: string } = { tags: [], searchText: '' }) {
    console.log(`filter: ${JSON.stringify(filter)}`);

    let filtered = this.quizzesDataStore
      .filter(q => filter.tags.every(tag => q.tags.includes(tag)))
      .filter(q => q.title.toLowerCase().includes(filter.searchText));

    this._quizzes.next(filtered);
  }

  /**
   * Takes the quizzes of a developer with trials filtered by tags and search text
   * if the currently loginned account is a developer
   */
  receiveQuizzesOfDev(filter: { tags: Tag[], searchText: string } = { tags: [], searchText: '' }) {
    console.log(`filter: ${JSON.stringify(filter)}`);

    let filtered = this.quizzesWithTrialsStore
      .filter(q => filter.tags.every(tag => q.quiz.tags.includes(tag)))
      .filter(q => q.quiz.title.toLowerCase().includes(filter.searchText));

    this._quizzesWithTrials.next(filtered);
  }

  /**
   * Takes the quizzes of a developer with trials filtered by tags
   * @param tags 
   */
  receiveQuizzesWithTrialsByTag(tags: Tag[]): void {
    console.log(`tags: ${tags}`);

    let filtered = this.quizzesWithTrialsStore.filter(q => tags.every(tag => q.quiz.tags.includes(tag)));

    console.warn('implement by api');

    this._quizzesWithTrials.next(filtered);
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
    this.quizzesDataStore.push(quiz);
    this._quizzes.next(this.quizzesDataStore);
  }

  removeQuiz(): void {
    this.quizzesDataStore.pop();
    this._quizzes.next(this.quizzesDataStore);
  }
}
