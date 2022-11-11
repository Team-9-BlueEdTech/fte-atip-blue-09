import * as S from './styles'

const ChartCard = ({ title, options }) => {

  console.log(options);
  
  
  return (
    <S.Card>
      <h3>{ title }</h3>
      <S.CardChart>
        {
          options.map((option, index) =>
              <S.ChartBar
                key={index}
                size={10}
              >
                <S.ChartValue
                  key={index}
                  value={75}
                  color={"#00B6CB"}
                />
                <h5>{option.text}</h5>
                
              </S.ChartBar>
            )
        }
      </S.CardChart>
    </S.Card>
  )
}

export default ChartCard
