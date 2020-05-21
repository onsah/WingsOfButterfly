import { QuestionID, Difficulty, Duration, Tag } from './types';

export type QuizID = number;

export class Quiz {
    constructor(
        public id: QuizID = 0,
        public difficulty: Difficulty = Difficulty.Easy,
        public type: QuizType = QuizType.Curated,
        public duration: Duration = 600,
        public title: string = '',
        public questionIDs: QuestionID[] = [],
        public tags: Tag[] = [],
    ) { }

    static getDefault(): Quiz {
        let q = new Quiz();
        q.title = "Database";
        q.questionIDs = [ 0, 1, 2, 3, 4 ];
        q.tags = [ "SQL", "Algorithms" ];
        return q;
    }

    static withTags(tags: Tag[]): Quiz {
        let quiz = this.getDefault();
        quiz.tags = tags;
        return quiz;
    }
}

export enum QuizType {
    Curated = "Curated",
    Company = "Company",
    Random = "Random", // Does this still exist
}