import { Quiz, QuizID } from '../models/quiz';
import { Question } from '../models/question';
import { QuestionID, DevID, Tag } from '../models/types';
import { Observable } from 'rxjs';

/**
 * The all backend except login
 */
export interface IQuizService {
    readonly quizzes: Observable<Quiz[]>;

    receiveAllQuizzes(): void;
    /**
     * Receives the quizzes of the developer took
     * @param devID ID of the developer
     */
    receiveQuizzesOfDev(devID: DevID): void;
    /**
     * 
     * @param tags tags wanted in the quiz
     */
    receiveQuizzesByTag(tags: Tag[]): void;

    /**
     * Retrieves the questions of the quiz
     */
    receiveQuestions(quiz: Quiz): Promise<Question[]>;
}