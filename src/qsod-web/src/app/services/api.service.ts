import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserType } from '../models/user';
import { Tag, Duration, Difficulty } from '../models/types';
import { Question, Option } from '../models/question';
import { Quiz, QuizType } from '../models/quiz';
import { Trial } from '../models/trial';
import { Helper } from '../utility/helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Configuartion
  readonly URL = "http://localhost";
  readonly PORT = "8001";
  readonly BASE_ENDPOINT = "/api";
  readonly LOGIN_ENDPOINT = this.URL + ":" + this.PORT + this.BASE_ENDPOINT + "/user";
  readonly QUIZ_ENDPOINT = this.URL + ":" + this.PORT + this.BASE_ENDPOINT + "/quiz";
  readonly TAG_ENDPOINT = this.URL + ":" + this.PORT + this.BASE_ENDPOINT + "/tag";
  readonly TRIAL_ENDPOINT = this.URL + ":" + this.PORT + this.BASE_ENDPOINT + "/trial";
  readonly CONSISTS_ENDPOINT = this.URL + ":" + this.PORT + this.BASE_ENDPOINT + "/cons";

  constructor(
    private http: HttpClient
  ) { }

  /**
   * format is /user/{email}/{password}
   * @param email 
   * @param password 
   */
  async login(email: string, password: string) {
      let url = this.LOGIN_ENDPOINT + "/" + email + "/" + password;
      let options =  { 
        observe: 'body', 
        responseType: 'json',
      };

      // TODO: change to LoginResponse
      let resp = await this.get<User>(url, options);

      return resp;
  }

  async register(email: string, username: string, password: string, userType: UserType): Promise<boolean> {
    let url = this.LOGIN_ENDPOINT;

    let body = {
      email,
      password,
      username,
      role: userType.toString(),
    };

    return await this.post<boolean>(url, body, {});
  }

  async getAllTags(): Promise<Tag[]> {
    let url = this.TAG_ENDPOINT + "/getAll";

    let resp = await this.get<{ tagName: string }[]>(url, {});

    return resp.map(t => t.tagName);
  }

  async getAllQuizzes(): Promise<Quiz[]> {
    let url = this.QUIZ_ENDPOINT + "/getAllQuiz";

    let resp = await this.get<{ 
      id: number, 
      name: string,
      difficulty: Difficulty,
      type: QuizType,
      time_limit: number,
    } []>(url, {});

    console.log(resp);

    return resp.map(q => new Quiz(
      q.id,
      q.difficulty,
      q.type,
      q.time_limit,
      q.name,
    ));
  }

  async getQuestions(quizID: number): Promise<Question[]> {
    let url = this.CONSISTS_ENDPOINT + "/" + quizID;

    let resp = await this.get<{
      description: string,
      id: number,
      difficulty: Difficulty,
      correct_option: Option,
      optionA: string,
      optionB: string,
      optionC: string,
      optionD: string,
    }[]>(url, {});

    console.log('questions: ', resp);

    return resp.map(q => new Question(
      q.id, 
      q.description,
      q.difficulty,
      q.correct_option,
      [ q.optionA, q.optionB, q.optionC, q.optionD ],
    ));
  }

  async getAllTrialsDev(id: number): Promise<{ quiz: Quiz, trials: Trial[] }[]> {
    let url = this.TRIAL_ENDPOINT + "/" + id;

    let resp = await this.get<{
      list: {
        first: { id: number, difficulty: Difficulty, type: QuizType, timeLimit: number, name: string },
        second: { devId: number, quizId: number, trialNo: number, successRate: number, choosenOptions: Option[], passed: boolean }[]
      }[]
    }>(url, {});

    let list = resp.list;

    console.log("trials response: ", resp);

    let responseMapped = list.map(item => {
      return {
        quiz: new Quiz(
          item.first.id,
          item.first.difficulty,
          item.first.type,
          item.first.timeLimit,
          item.first.name,
        ),
        trials: item.second.map(t => new Trial(
          t.devId,
          t.quizId,
          t.trialNo,
          t.successRate,
          -1,
          t.choosenOptions,
          t.passed,
        )),
      };
    })

    return responseMapped;
  }

  async createQuizByAdmin(adminId: number, title: string, tags: Tag[], duration: Duration, difficulty: Difficulty, questions: Question[]) {
    let url = this.QUIZ_ENDPOINT;

    let body = {
      name: title,
      difficulty,
      tags,
      duration,
      curatedId: adminId,
      questionDtos: questions.map(q => {
        return {
          description: q.description,
          difficulty: q.difficulty,
          correct_option: Helper.arrayToOption(q.correctOptions),
          optionA: q.options[0],
          optionB: q.options[1],
          optionC: q.options[2],
          optionD: q.options[3],
        };
      }),
    };

    console.log('body: ', body);

    let resp = await this.post(url, body, {});

    console.log('response: ', resp);

    return true;
  }

  async createTrial(devId: number, quizId: number, choosenOptions: Option[]) {
    let url = this.TRIAL_ENDPOINT;

    let body = {
      devId,
      quizId,
      choosenOptions
    };

    return await this.post(url, body, {});
  }

  /**
   * Deletes the account
   */
  async delete(id: number): Promise<boolean> {
    let url = this.LOGIN_ENDPOINT + "/" + id;

    return await this.http.delete<boolean>(url).toPromise();
  }

  private post = async <T> (url: string, body: {}, options: {}): Promise<T> => {
    console.log(`making post request ${url}`);

    return await this.http.post<T>(url, body, options).toPromise();
  }

  private get = async <T> (url: string, options: {}): Promise<T> => {
    console.log(`making get request ${url}`);

    return this.http.get<T>(url, options).toPromise();
  };
}
