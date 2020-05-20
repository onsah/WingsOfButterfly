import { QuestionID, Difficulty, Tag } from './types';

export class Question {
    id: QuestionID;
    description: string;
    difficulty: Difficulty;
    correctOption: Option;
    options: string[];  // Always 4
    tags: Tag[];
    image: Uint8Array;

    static getDefault(id: number = 0): Question {
        return {
            id,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            difficulty: Difficulty.Easy,
            correctOption: Option.A,
            options: ["Option A", "Option B", "Option C", "Option D"] ,
            tags: [ 'A', 'B' ],
            image: new Uint8Array(),
        }
    }
}

export enum Option {
    Empty = "",
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    AB = "AB",
    AC = "AC",
    AD = "AD",
    BC = "BC",
    BD = "BD",
    CD = "CD",
    ABC = "ABC",
    ABD = "ABD",
    ACD = "ACD",
    BCD = "BCD",
    ABCD = "ABCD",
}