import React from "react"

export interface Question {
  id: number
  text: string
  label: string
  obs: string
  isBase: boolean
  wasEdited: boolean
  isEditable: boolean
  _id?: string
}

export interface QuestionSubmit extends Question {
  options: Option[]
}
export interface Option {
  id: number
  text: string
}

export interface QuestionIndex extends Question {
  options: number
}

export interface QuestionElement {
  readonly id: number
  readonly isEditable: boolean
  readonly label: string
  readonly obs: string
  onChange: React.Dispatch<React.SetStateAction<QuestionSubmit[]>>
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

export interface CensusQuestionSelect extends Question {
  enabled: boolean
  options: Option[]
}

export type QuestionArray = QuestionIndex[]
export type OptionArray = [number, Option[]]