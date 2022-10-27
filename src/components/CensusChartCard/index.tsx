import * as S from './styles'

const ChartCard = ({ title, data, options }) => {
  
  return (
    <S.Card>
      <h3>{ title }</h3>
      <S.CardChart>
        {
          options.map((option: string, index: number) =>
              <S.ChartBar
                size={10}
              >
                <S.ChartValue
                  key={index}
                  value={74}
                  color={"#00B6CB"}
                />
                <h5>{option}</h5>
                
              </S.ChartBar>
            )
        }
      </S.CardChart>
    </S.Card>
  )
}

export default ChartCard