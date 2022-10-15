import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Button from "../../components/Button";
import { useCensus } from "../../contexts/census";
import { usePartner } from "../../contexts/partner";
import * as S from "./styles";

const CensusPage = () => {

  const navigate = useNavigate();

  const { censusId } = useParams();
  const { partner, getPartnerById } = usePartner();
  const { census, getCensusById } = useCensus();

  const [ admin, setAdmin ] = useState<boolean>(true)

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
    
    <S.MainStructure>
      <S.SideBar>
        <div>
          {
            admin &&
              <Button variant="add"
                text="⬅ Voltar para Lista"
                onClick={() => navigate("/admin")}
              />
          }
        </div>
        <S.SideBarMiddle>
          <Button text="E-mails"
          />
          <Button text="Perguntas" />
          <Button text="Dashboard" />
        </S.SideBarMiddle>
        <S.SideBarCard>
          <img src={partner?.logo} alt=""/>
        </S.SideBarCard>
      </S.SideBar>
      <S.Dashboard>
          {census?.launchDate}
      </S.Dashboard>
    </S.MainStructure>

  )
}

export default CensusPage