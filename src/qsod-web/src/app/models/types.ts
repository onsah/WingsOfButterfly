export type QuestionID = number;

export enum Difficulty {
    Easy = 0,
    Medium = 1,
    Hard = 2,
}

/**
 * seconds
 */
export type Duration = number;

export type Tag = string;

/**
 * Email of the developer
 */
export type DevID = string;

 /**
  * ProfileType
  */
export enum ProfileType{
  Dev = "Developer",
  Admin = "Admin",
  Company = "Company"
}
