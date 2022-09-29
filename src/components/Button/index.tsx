import * as S from './styles'

type IncomingLink = {
  children: React.ReactNode;
}

const Button = (props: IncomingLink) => {
  return (
    <S.Button>
      {props.children}
    </S.Button>
  )
}

export default Button