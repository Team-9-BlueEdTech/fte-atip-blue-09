import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCensus } from "../../contexts/census"
import PieChartCard from "../PieChartCard";
import * as S from './styles'

const CensusDashboard = () => {

  const { censusId } = useParams();
  const { census, getCensusById } = useCensus();

  const mainCharts: string[] = [ // this array can be added to the DB
    "Raça", "Identidade de Gênero",
    "Trans/Cisgênero", "Orientação Sexual",
  ]; // a new string matching a questionsLabels just adds a new main chart :)

  useEffect(() => {
    if (censusId)
      getCensusById(censusId)
  }, [])  

 return (
    <S.DivDashboard>
      {
        mainCharts.map((chartName, index) => {
          return <PieChartCard
            key={index}
            title={chartName}
          />
        })
      }
    </S.DivDashboard>
  )
}

export default CensusDashboard