export interface User {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface PartnerIndex {
  id: string;
  name: string;
  submit: boolean;
  createdAt: string;
}

export interface Partner {
  id: string;
  name: string;
  email: string;
  password: string;
  logo: string;
  submit: boolean;
  census: CensusIndex[];
  persons: string[];
  createdAt: string;
}

export interface CensusIndex {
  id: string;
  createdAt: string;  
}

export interface Census {
  id: string;
  partnerId: string;
  launchDate: string;
  questionsLabels: Array<String | String[] | undefined>;
  questions: Array<String | String[] | undefined>;
  questionsObs: Array<String | String[] | undefined>;
  options: Array<String | String[] | undefined>;
  collaborated: [];
}

export interface Person {
  id: string;
  partnerId: string;
  email: string;
  lgpdConfirm: boolean;
}

export interface Answers {
  id: string;
  censusId: string;
  list: Array<String | String[] | undefined>;
}

