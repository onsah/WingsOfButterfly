import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { QuizService } from './quiz.service';
import {Profile} from '../models/profile';
import {ProfileService} from './profile.service';
import { Trial } from '../models/trial';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _quiz: Quiz;
  private _questions: Question[];
  private _trial: Trial;

  private _profile: Profile;

  get quiz() { return this._quiz; }
  set quiz(quiz: Quiz) {
    this._quiz = quiz;
    this._questions = null;
  }
  get questions() { return this._questions; }
  set questions(questions: Question[]) { this._questions = questions; }
  get trial() { return this._trial; }
  
  setAll(trial: Trial, quiz: Quiz, questions: Question[]) {
    this._trial = trial;
    this._quiz = quiz;
    this._questions = questions;
  }

  constructor(
    private quizService: QuizService,
    private profileService: ProfileService,
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

  get profile(){
    return this._profile;
  }
  set profile( profile: Profile ){
    this._profile = profile;
  }
}
