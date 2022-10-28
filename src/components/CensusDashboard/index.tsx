import { ResponsivePie } from "@nivo/pie"
import * as S from './styles'

const CensusDashboard = () => {

  const data = [
    {
      "id": "lisp",
      "label": "lisp",
      "value": 572,
      "color": "hsl(29, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 516,
      "color": "hsl(71, 70%, 50%)"
    },
    {
      "id": "elixir",
      "label": "elixir",
      "value": 356,
      "color": "hsl(335, 70%, 50%)"
    },
    {
      "id": "sass",
      "label": "sass",
      "value": 114,
      "color": "hsl(93, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 411,
      "color": "hsl(114, 70%, 50%)"
    }
  ]

 return (
    <S.DivDashboard>
      <ResponsivePie
        data={data}
        
      />
    </S.DivDashboard>
  )
}

export default CensusDashboard