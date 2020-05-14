import { QuestionID, Difficulty, Duration, Tag } from './types';
import { Timestamp } from 'rxjs';

export type QuizID = number;

export class Quiz {
    id: QuizID;
    difficulty: Difficulty;
    type: QuizType;
    duration: Duration;
    title: string;
    questionIDs: QuestionID[];
    tags: Tag[];

    static getDefault(): Quiz {
        return {
            id: 0,
            difficulty: Difficulty.Easy,
            type: QuizType.Curated,
            duration: 0,
            title: "Database",
            questionIDs: [ 0, 1, 2, 3, 4 ],
            tags: [ "SQL", "Algorithms" ],
        };
    }

    static withTags(tags: Tag[]): Quiz {
        let quiz = this.getDefault();
        quiz.tags = tags;
        return quiz;
    }
}

export enum QuizType {
    Curated,
    Company,
    Random, // Does this still exist
}