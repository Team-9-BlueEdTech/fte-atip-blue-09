import { QuestionMap } from "./Questions";

export interface User {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  isAdmin: boolean;
  id?: string;
  firstLogin?: boolean;
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
  firstLogin: boolean;
  createdAt: string;
}

export interface CensusIndex {
  _id: string;
  createdAt: string;
}

export interface Census {
  id: string;
  partnerId: string;
  launchDate: string;
  questions: QuestionMap[];
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
  list: Array<string | string[] | undefined>;
}

export interface EmailIndex {
  email: string;
}

export interface ChangePassword {
  password: string;
  confirmPassword?: string;
}
