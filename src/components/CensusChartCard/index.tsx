import * as S from './styles'

const ChartCard = ({ title, options }) => {

  const colors = [
    "#2176AE",
    "#B66D0D",
    "#FE6847",
    "#BED558",
    "#C9C9C9",
    "#FFC4EB"
  ]

  const values = [40, 20, 15, 10, 10, 5];

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
                  value={values[index]}
                  color={colors[index]}
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
