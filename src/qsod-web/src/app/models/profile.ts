import {DevID, ProfileType} from './types';

export class Profile{

  name: string;
  // avatar
  email: string;
  // CV
  // phone
  nationality: string;
  residency: string;
  jobStatus: string;
  description: string;

  static getDevDefault(): Profile {
    return {
      name: "Rafi",
      email: "excalibur42@gmail.com",
      nationality: "Turkey",
      residency: "Konya, Turkey",
      jobStatus: "Looking for a job",
      description: "This is a placeholder."
    };
  }
}
