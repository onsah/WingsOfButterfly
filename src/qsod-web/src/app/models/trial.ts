import { Option } from './question';
import { Helper } from '../utility/helper';

export class Trial {
    public choosenOptions: boolean[][]

    constructor(
        public devID: number = 0,
        public quizID: number = 0,
        public trialNo: number = 1,
        public successRate: number = 1,
        public finishedIn: number = 300,
        choosenOptionsOpt: Option[] = [ Option.A, Option.B, Option.C, Option.D, Option.AB ],
        public passed: boolean = true,
    ) { 
        this.choosenOptions = choosenOptionsOpt.map(o => Helper.optionsAsArray(o));
    }
    
    public static getDefault() {
        return new Trial();
    }

    public static withTrialNo(trialNo = 1) {
        let t = Trial.getDefault();
        t.trialNo = trialNo;
        return t;
    }
}