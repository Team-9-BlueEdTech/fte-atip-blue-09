import * as S from './styles'

const ChartCard = ({ title, data, options }) => {

  console.log(title, data, options);
  
  return (
    <S.Card>
      <h3>{ title }</h3>
      <S.CardChart>
        {
          <S.ChartBar
            value={10}
            size={10}
            color={"#00B6CB"}
          >
            <h4>Label</h4>
          </S.ChartBar>
        }
      </S.CardChart>
    </S.Card>
  )
}

export default ChartCard