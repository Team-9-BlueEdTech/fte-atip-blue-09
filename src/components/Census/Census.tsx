import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { usePartner } from "../../contexts/partner";
import api from "../../services/api";
import { CensusIndex } from "../../types";
import * as S from "./styles";

const CensusPage = () => {

  const navigate = useNavigate();

  const { partner } = usePartner();

  const [ censusList, setCensusList ] = useState<CensusIndex[] | null>(null)
  const [ spinner, setSpinner ] = useState<boolean>(false)

  const createNewCensus = async (id: string) => {
    await api.get(
      'http://localhost:3333/questions'
    )
    .then(async (res) => {
      await api.post(
        'http://localhost:3333/census',
        {
          partnerId: id,
          questions: res.data
        }
      )
    })
  }

  useEffect(() => {
    api.get(
      `http://localhost:3333/census/all/${partner?.id}`
    )
    .then((res) => {
      setCensusList(res.data)
    })
  }, [partner])

  return(
    <S.CensusDashboard>
      {
        censusList?.map
        ((census, index) => 
          <S.CensusCard
            key={index}
            onClick={() => navigate(`/census/${census._id}`)}
          >
            <h2>{census.createdAt}</h2>
          </S.CensusCard>
        )
      }
      {
        partner &&
        <S.CensusCard
          onClick={() => {
            createNewCensus(partner?.id)
            setSpinner(true)
            
            //then: getPartnerById
            setTimeout(() => {
              setSpinner(false)
            }, 3000)
          }}
        >
        {
          spinner ?
            <h2>Criando...</h2>
          :
            <h1>+</h1>
        }
      </S.CensusCard>
      }
    </S.CensusDashboard>
  )
}

export default CensusPage