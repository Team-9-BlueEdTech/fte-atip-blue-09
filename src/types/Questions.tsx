export interface Question {
  id: number
  text: string
  options: Option[]
}

export interface Option {
  id: number
  text: string
}

export interface QuestionIndex {
  id: number
  text: string
  options: number
}

export type QuestionArray = QuestionIndex[]
export type OptionArray = [number, Option[]]