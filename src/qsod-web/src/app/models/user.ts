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
    id: number = -1;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public hasCV(): boolean {
        return this.cv !== null;
    }
}

export enum UserType {
    Developer = "DEV",
    Company = "COM",
    Admin = "ADMIN",
}

export enum JobSituation {
    Unemployed,
    Employed,
}

export interface ICV {
    (): Uint8Array;
}