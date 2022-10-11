import { InputHTMLAttributes } from "react"
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "large";
}

const Input = ({ inputSize }: InputProps) => {
  return (
    <S.Input inputSize={inputSize} />
  )
}

export default Input