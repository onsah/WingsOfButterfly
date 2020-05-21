export class User {
    email: string;
    password: string;

    username: string = null;
    role: UserType = UserType.Developer;
    description: string = null;
    phone: string = null;
    avatar: string;

    bannedBy: string;

    //developer specific
    cv: string;
    nationality: string;
    residency: string;
    jobStatus: string;

    //company specific
    origin: string;
    founded: number;
    country: string;

    id: number = -1;

    constructor(email: string, password: string) {
        this.email = email;
        this.username = email;
        this.password = password;
    }
/*
    public hasCV(): boolean {
        return this.cv !== null;
    }
    */

}


export enum UserType {
    Developer = "DEV",
    Company = "COM",
    Admin = "ADMIN",
}
/*
export interface ICV {
    (): Uint8Array;
}
*/
