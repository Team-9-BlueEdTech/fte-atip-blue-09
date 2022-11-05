import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { usePartner } from "../../contexts/partner";
import * as S from "./styles";

const CensusPage = () => {

  const navigate = useNavigate();

  const { partner } = usePartner();

  const [ spinner, setSpinner ] = useState<boolean>(false)

  return(
    <S.CensusDashboard>
      {/* {
        partner?.census.map
        ((census, index) => 
          <S.CensusCard
            key={index}
            onClick={() => navigate(`/census/${census.id}`)}
          >
            <h2>{census.createdAt}</h2>
          </S.CensusCard>
        )
      } */}
      <S.CensusCard
        onClick={() => {
          //DEVELOP api trigger /census/new/${partner.id}
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
    </S.CensusDashboard>
  )
}

export default CensusPage