import { Quiz, QuizID } from '../models/quiz';
import { Question } from '../models/question';
import { QuestionID, DevID, Tag } from '../models/types';
import { Observable } from 'rxjs';

/**
 * The all backend except login
 */
export interface IQuizService {
    readonly quizzes: Observable<Quiz[]>;
}