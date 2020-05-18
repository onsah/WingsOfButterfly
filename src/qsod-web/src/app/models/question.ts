import { QuestionID, Difficulty } from './types';

export class Question {
    id: QuestionID;
    description: string;
    difficulty: Difficulty;
    correctOption: Option;
    options: string[];  // Always 4
    image: Uint8Array;

    static getDefault(id: number = 0): Question {
        return {
            id,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            difficulty: Difficulty.Easy,
            correctOption: Option.A,
            options: ["Option A", "Option B", "Option C", "Option D"] ,
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