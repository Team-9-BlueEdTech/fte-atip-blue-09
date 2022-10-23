import * as S from './styles'

const ChartCard = ({ title, data }) => {
  return (
    <S.DivCard>
      <h3>{title}</h3>
      {data}
    </S.DivCard>   
  )
}

export default ChartCard