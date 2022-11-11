import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/auth";
import { usePartner } from "../../contexts/partner";
import api from "../../services/api";
import { CensusIndex } from "../../types";
import * as S from "./styles";
import { DateTime } from "luxon";

const CensusPage = () => {

  const navigate = useNavigate();

  const { partner } = usePartner();
  const { admin } = useAuth();

  const [ censusList, setCensusList ] = useState<CensusIndex[] | null>(null)
  const [ spinner, setSpinner ] = useState<boolean>(false)

  const getAllCensus = async () => {
    await api.get(
      `/census/all/${partner?.id}`
    )
    .then((res) => {
      setCensusList(res.data)
    })
  }

  const createNewCensus = async (id: string) => {
    setSpinner(true);
    await api.post(
      `/census/${id}`,
    )
    .then(() => {
      getAllCensus()
    })
    .then(() => {
      setSpinner(false)
    })
  }

  useEffect(() => {
    getAllCensus()
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
            <h2>{DateTime.fromISO(census.createdAt).toLocaleString()}</h2>
          </S.CensusCard>
        )
      }
      {
        partner && admin &&
        <S.CensusCard
          onClick={() => {
            createNewCensus(partner?.id)
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