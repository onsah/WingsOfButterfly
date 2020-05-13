import { QuestionID, Difficulty } from './types';

export class Question {
    id: QuestionID;
    description: string;
    difficulty: Difficulty;
    correctOption: Option;
    image: Uint8Array;

    static getDefault(): Question {
        return {
            id: 0,
            description: "question text",
            difficulty: Difficulty.Easy,
            correctOption: Option.A,
            image: new Uint8Array(),
        }
    }
}

export enum Option {
    A,
    B,
    C,
    D,
    AB,
    AC,
    AD,
    BC,
    BD,
    CD,
    ABC,
    ABD,
    ACD,
    BCD,
    ABCD,
}