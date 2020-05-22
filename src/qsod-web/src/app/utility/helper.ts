import { Option } from '../models/question';
import { QuizType } from '../models/quiz';

export class Helper {
    static isInteger(value) {
        return ((parseFloat(value) == parseInt(value)) && !isNaN(value));
    }

    static optionsAsArray(option: Option): boolean[] {
        switch (option) {
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

    static arrayToOption(options: boolean[]): Option {
        if (options[0]) {
            if (options[1]) {
                if (options[2]) {
                    if (options[3]) {
                        return Option.ABCD;
                    } else {
                        return Option.ABC;
                    }
                } else {
                    if (options[3]) {
                        return Option.ABD;
                    } else {
                        return Option.AB;
                    }
                }
            } else {
                if (options[2]) {
                    if (options[3]) {
                        return Option.ACD;
                    } else {
                        return Option.AC;
                    }
                } else {
                    if (options[3]) {
                        return Option.AD;
                    } else {
                        return Option.A;
                    }
                }
            }
            } else {
            if (options[1]) {
                if (options[2]) {
                    if (options[3]) {
                        return Option.BCD;
                    } else {
                        return Option.BC;
                    }
                } else {
                    if (options[3]) {
                        return Option.BD;
                    } else {
                        return Option.B;
                    }
                }
            } else {
                if (options[2]) {
                    if (options[3]) {
                        return Option.CD;
                    } else {
                        return Option.C;
                    }
                } else {
                    if (options[3]) {
                        return Option.D;
                    } else {
                        return Option.Empty;
                    }
                }
            }
        } 
    }
}