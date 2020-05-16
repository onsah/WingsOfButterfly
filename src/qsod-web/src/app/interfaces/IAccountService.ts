import { User, JobSituation, ICV } from '../models/user';
import { Either } from '../utility/Either';

export type LoginResult = Either<User, LoginError>;
export type RegisterResult = Either<boolean, RegisterError>;

export interface IAccountService {
    login(email: string, password: string): Promise<LoginResult>;
    logout(): void;

    isLoggedIn(): boolean;

    registerDeveloper(
        email: string,
        password: string,
        username: string,
        JobSituation: JobSituation,
        contactInfo: string,
        description?: string,
        cv?: ICV,
        avatar?: Uint8Array,
    ): Promise<RegisterResult>;

    registerCompany(
        email: string,
        password: string,
        username: string,
        description: string,
        contactInfo: string,
        logo: Uint8Array,
    ): boolean;

    registerAdmin(
        email: string,
        password: string,
        username: string,
    ): boolean;

    updateProfile(email: string, password: string, newProfile: User): boolean;
}

export enum LoginError {
    EmailOrPasswordEmpty = "EmailOrPasswordEmpty",
    EmailAlreadyTaken = "EmailAlreadyTaken",
    UsernameNotValid = "UsernameNotValid",
    PasswordNotValid = "PasswordNotValid",
    Unkown = "Unkown",
}

export enum RegisterError {
    EmailOrPasswordEmpty,
    EmailAlreadyTaken,
    UsernameNotValid,
    PasswordNotValid,
    PasswordsDoNotMatch,
    Unkown,
}
