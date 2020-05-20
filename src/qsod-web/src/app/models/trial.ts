import { Option } from './question';

export class Trial {
    devID: number;
    quizID: number;
    trialNo: number;
    successRate: number;
    finishedIn: number; 
    choosenOptions: Option[];
    passed: boolean;
    
    public static getDefault() {
        return {
            devID: 0,
            quizID: 0,
            trialNo: 1,
            successRate: 1,
            choosenOptions: [ Option.A, Option.B, Option.C, Option.D, Option.AB ],
            finishedIn: 300,
            passed: true,
        };
    }

    public static withTrialNo(trialNo = 1) {
        let t = Trial.getDefault();
        t.trialNo = trialNo;
        return t;
    }
}