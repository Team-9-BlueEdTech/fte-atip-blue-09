import React from "react"

export interface Question {
  id: number
  text: string
  label: string
  obs: string
  options: Option[]
  isBase: boolean
  wasEdited: boolean
  isEditable: boolean
  _id?: string
}

export interface Option {
  id: number
  text: string
}

export interface QuestionElement {
  readonly id: number
  readonly isEditable: boolean
  readonly label: string
  readonly obs: string
  onChange: React.Dispatch<React.SetStateAction<Question[]>>
  readonly removeQuestion: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface CensusQuestionElement {
  readonly id: number
  readonly isEnabled: boolean
  readonly title: string
  readonly isEditable: boolean
  readonly label: string
  readonly obs: string
  onChange: React.Dispatch<React.SetStateAction<CensusQuestionSelect[]>>
}

export interface QuestionMap {
  id: number
  question: string
  questionLabel: string
  questionObs: string
  questionAnswers: Option[]
  isEditable: boolean
  _id?: string
}

export interface CollabQuestion {
  readonly id: number
  readonly title: string
  readonly label: string
  readonly obs: string
  readonly options: Option[]
}

export interface CollabQuestionElement extends CollabQuestion {
  onChange: React.Dispatch<React.SetStateAction<CollabAnswerForm[]>>
}

export interface CensusQuestionSelect extends Question {
  enabled: boolean
  options: Option[]
}

export interface CollabAnswerForm {
  questionId: number
  answerId: number
}

export interface FormAccepted {
  questions: CollabAnswerForm[]
  lgpd: true
}

export interface FormRejected {
  questions?: null
  lgpd: false
}

export type Form = FormAccepted | FormRejected