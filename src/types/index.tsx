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
  questions: [{}];
  hierarchyLevel: [];
  area: [];
  actingTime: [];
  answersId: string;
}

export interface Person {
  partnerId: string;
  email: string;
  collaborated: boolean;
}

export interface EmailIndex {
  email: string;
}

export interface ChangePassword {
  password: string;
  confirmPassword?: string;
}

