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
  ]; // a new string matching a census.questionsLabels just adds a new main chart :)

  const mainFilters: string[] = [
    "Função", "Tempo"
  ];

  useEffect(() => {
    if (censusId)
      getCensusById(censusId)
      setAnswers(MockedAnswers)
  }, [])

  return (
    census && answers &&
    <S.MainDashboard>
      <S.MainFilters>
        {
          mainFilters.map((name, index) =>
            <S.DivFilters>
              <S.Filter
                key={index}              
              >
                <h3>{name}</h3>
              </S.Filter>
              <S.DivOptions>
                {
                  census.options[census.questionsLabels.indexOf(name)].map(
                    (option: string[], index: number) => 
                      <S.Filter
                        key={index}
                      >
                        {option}
                      </S.Filter>
                  )
                }
              </S.DivOptions>
            </S.DivFilters>
          )
        }
      </S.MainFilters>
      <S.DivDashboard>
        {
          mainCharts.map((chartName, index) => {
            return <ChartCard
              key={index}
              title={chartName}
              data={answers.map(answer => {
                return answer.list[census.questionsLabels.indexOf(chartName)]
              })}
              options={census.options[census.questionsLabels.indexOf(chartName)]}
            />
          })
        }
      </S.DivDashboard>
    </S.MainDashboard>
  )
}

export default CensusDashboard