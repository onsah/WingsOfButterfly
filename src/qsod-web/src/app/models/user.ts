export class User {
    email: string;
    password: string;
    username: string = null;
    type: UserType = UserType.Developer;
    description: string = null;
    cv: ICV = null;
    contactInfo: string = null;
    jobSituation: JobSituation = JobSituation.Unemployed;
    avatarUrl: string = null;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public hasCV(): boolean {
        return this.cv !== null;
    }
}

export enum UserType {
    Developer,
    Company,
    Admin,
}

export enum JobSituation {
    Unemployed,
    Employed,
}

export interface ICV {
    (): Uint8Array;
}