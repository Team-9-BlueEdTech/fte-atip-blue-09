import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { useCensus } from "../../contexts/census";
import { usePartner } from "../../contexts/partner";
import * as S from "./styles";

const CensusPage = () => {

  const navigate = useNavigate();

  const { censusId } = useParams();
  const { partner, getPartnerById } = usePartner();
  const { census, getCensusById } = useCensus();

  const [spinner, setSpinner] = useState<boolean>(false)

  useEffect(() => {
    if (censusId) {
      console.log("getCensus")
      getCensusById(censusId);
    }
  }, []);

  useEffect(() => {
    if (census) {
      console.log("getPartner")    
      getPartnerById(census?.partnerId);
    }
  }, [census]);

  return(
    <S.CensusDashboard>
      {
        partner?.census.map
        ((census, index) => 
          <S.CensusCard
          key={index}
            onClick={() => navigate(`/census/${census.id}`)}
          >
            <h2>{census.createdAt}</h2>
          </S.CensusCard>
        )
      }
      <S.CensusCard
        onClick={() => {
          //DEVELOP api trigger /census/new
          setSpinner(true)
          
          //DEVELOP api get partner then:              
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