import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCensus } from "../../contexts/census";
import { Answers } from "../../types";
import { MockedAnswers } from "../../mocks/route-answers-by-census-id";
import ChartCard from "../CensusChartCard";
import * as S from './styles'

const CensusDashboard = () => {

  const { censusId } = useParams();
  const { census, getCensusById } = useCensus();
  const [ answers, setAnswers ] = useState<Answers[]>();

  const mainCharts: string[] = [ // this array can be added to the DB
    "Raça", "Identidade de Gênero",
    "Trans/Cisgênero", "Orientação Sexual",
  ]; // a new string matching a questionsLabels just adds a new main chart :)

  useEffect(() => {
    if (censusId)
      getCensusById(censusId)
      setAnswers(MockedAnswers)
  }, [])

  return (
    <S.DivDashboard>
      {
        census && answers && mainCharts.map((chartName, index) => {
          return <ChartCard
            key={index}
            title={chartName}
            data={answers.map(answer => {
              return answer.list[census.questionsLabels.indexOf(chartName)]
            })}
          />
        })
      }
    </S.DivDashboard>
  )
}

export default CensusDashboard