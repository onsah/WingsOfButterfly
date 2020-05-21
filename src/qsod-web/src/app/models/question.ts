import { QuestionID, Difficulty, Tag } from './types';
import { Helper } from '../utility/helper';

export class Question {

    public correctOptions: boolean[];

    constructor(
        public id: QuestionID,
        public description: string = "",
        public difficulty: Difficulty = Difficulty.Easy,
        correctOptionsOpt: Option = Option.Empty,
        public options: string[] = ["", "", "", ""],
        public tags: Tag[] = [],
        public image: Uint8Array = null,
    ) {
        this.correctOptions = Helper.optionsAsArray(correctOptionsOpt);
    }

    static getDefault(id: number = 0): Question {
        let q = new Question(id);
        q.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et";
        q.correctOptions = Helper.optionsAsArray(Option.A);
        q.options = ["Option A", "Option B", "Option C", "Option D"];
        q.tags = ['A', 'B'];
        return q;
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