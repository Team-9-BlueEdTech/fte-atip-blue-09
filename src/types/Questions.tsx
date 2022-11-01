export interface Question {
  id: number
  text: string
  options: Option[]
}

export interface Option {
  id: number
  text: string
}

export type QuestionArray = {
  id: number
  text: string
  optIndex: number
}[]