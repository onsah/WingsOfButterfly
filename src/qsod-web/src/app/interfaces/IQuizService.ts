import { Quiz, QuizID } from '../models/quiz';
import { Question } from '../models/question';
import { QuestionID } from '../models/types';

/**
 * The all backend except login
 */
export interface IQuizService {
    getQuiz(quizID: QuizID): Quiz;

    getQuestion(questionID: QuestionID): Question;
    getQuestions(quizID): Question[];

    getCompletedQuizzes(): Quiz[];
    
    getNoOfAttempts(quizID: QuizID): number;
}