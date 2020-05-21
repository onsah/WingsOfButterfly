import { QuestionID, Difficulty, Tag } from './types';

export class Question {

    private constructor(
        public id: QuestionID,
        public description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        public difficulty: Difficulty = Difficulty.Easy,
        public correctOption: Option = Option.A,
        public options: string[] = ["Option A", "Option B", "Option C", "Option D"],
        public tags: Tag[] = [ 'A', 'B' ],
        public image: Uint8Array = null,
    ) {
    }

    static getDefault(id: number = 0): Question {
        return new Question(id);
    }

    get correctOptionAsArray(): boolean[] {
        switch (this.correctOption) {
            case Option.A:
                return [true, false, false, false];
            case Option.B:
                return [false, true, false, false];
            case Option.C:
                return [false, false, true, false];
            case Option.D:
                return [false, false, false, true];
            case Option.AB:
                return [true, true, false, false];
            case Option.AC:
                return [true, false, true, false];
            case Option.AD:
                return [true, false, false, true];
            case Option.BC:
                return [false, true, true, false];
            case Option.BD:
                return [false, true, false, true];
            case Option.CD:
                return [false, false, true, true];
            case Option.ABC:
                return [true, true, true, false];
            case Option.ABD:
                return [true, true, false, true];
            case Option.BCD:
                return [false, true, true, true];
            case Option.ACD:
                return [true, false, true, true];
            case Option.ABCD:
                return [true, true, true, true];
            case Option.Empty:
                return [false, false, false, false];                        
        }   
    }

    set correctOptionAsArray(options: boolean[]) {
        if (options[0]) {
            if (options[1]) {
                if (options[2]) {
                    if (options[3]) {
                        this.correctOption = Option.ABCD;
                    } else {
                        this.correctOption = Option.ABC;
                    }
                } else {
                    if (options[3]) {
                        this.correctOption = Option.ABD;
                    } else {
                        this.correctOption = Option.AB;
                    }
                }
            } else {
                if (options[2]) {
                    if (options[3]) {
                        this.correctOption = Option.ACD;
                    } else {
                        this.correctOption = Option.AC;
                    }
                } else {
                    if (options[3]) {
                        this.correctOption = Option.AD;
                    } else {
                        this.correctOption = Option.A;
                    }
                }
            }
            } else {
            if (options[1]) {
                if (options[2]) {
                    if (options[3]) {
                        this.correctOption = Option.BCD;
                    } else {
                        this.correctOption = Option.BC;
                    }
                } else {
                    if (options[3]) {
                        this.correctOption = Option.BD;
                    } else {
                        this.correctOption = Option.B;
                    }
                }
            } else {
                if (options[2]) {
                    if (options[3]) {
                        this.correctOption = Option.CD;
                    } else {
                        this.correctOption = Option.C;
                    }
                } else {
                    if (options[3]) {
                        this.correctOption = Option.D;
                    } else {
                        this.correctOption = Option.Empty;
                    }
                }
            }
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