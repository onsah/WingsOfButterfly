import {DevID, ProfileType} from './types';

export class Profile{

  name: string;
  //avatar: string;
  email: string;
  cv: string;
  phone: string;
  nationality: string;
  residency: string;
  jobStatus: string;
  description: string;

  static getDevDefault(): Profile {
    return {
      name: "Name",
      email: "Email",
      cv: "cvURL",
      phone: "Phone",
      nationality: "Nationality",
      residency: "Residency",
      jobStatus: "Job Status",
      description: "Description",
    };
  }
}
