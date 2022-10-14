import { InputHTMLAttributes } from "react"
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "large";
}

const Input = ({ inputSize, ...props }: InputProps) => {
  return (
    <S.Input {...props} inputSize={inputSize} />
  )
}

export default Input