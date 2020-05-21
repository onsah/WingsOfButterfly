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

  country: string;
  origin: string;
  founded: string;

  static getDevDefault(): Profile {
    return {
      name: "Developer name",
      //avatar: string;
      email: "Developer email",
      cv: "Developer cv",
      phone: "Developer phone",
      nationality: "Developer Nationality",
      residency: "Developer Residency",
      jobStatus: "Developer job status",
      description: "Developer description",

      origin: "",
      founded: "",
      country: "",
    };
  }
  static getCompanyDefault(): Profile{
    return{
      name: "Company name",
      //avatar: string;
      email: "Company email",
      cv: "",
      phone: "Company phone",
      origin: "Company origin",
      founded: "Company founded",
      country: "Company country",
      description: "Company description",

      nationality: "",
      residency: "",
      jobStatus: "",
    };
  }
}
