import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useCensus } from "../../contexts/census";
import { usePartner } from "../../contexts/partner";
import CensusPage from "../../components/Census/Census";
import * as S from "./styles";
import EmailListing from "../../components/ListingEmail";
import QuestionsList from "../../components/ListingQuestions";
import CensusDashboard from "../../components/CensusDashboard";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";

const PartnerPage = () => {

  const navigate = useNavigate();

  const { partnerId, censusId } = useParams();
  console.log(partnerId, censusId);
  
  const { admin } = useAuth();
  const { partner, getPartnerById } = usePartner();
  const { getCensusById, getAnswersByCensusId } = useCensus();

  const [page, setPage] = useState<string>("Email");

  useEffect(() => {
    if (partnerId) {
      console.log("getPartner");      
      getPartnerById(partnerId);
    }
    if (censusId) {
      console.log("getCensus");
      getCensusById(censusId);
      getAnswersByCensusId(censusId);
    }
  }, [censusId]);

  // useEffect(()=>{
  //   if(partner?.firstLogin == true){
  //     navigate(`/partner/${partnerId}/firstLogin`)
  //   }
  // }, []);

  return (
    <>
      <Header />
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
            {
              censusId ?
                <>
                  <Button text="E-mails"
                    onClick={() => setPage("Email")}
                  />
                  <Button text="Perguntas"
                    onClick={() => setPage("Perguntas")}
                  />
                  {
                    admin ? 
                      <Button text="Dashboard"
                        onClick={() => setPage("Dashboard")}
                      />
                    :
                      <Button text="Adesão"
                      onClick={() => setPage("Adesão")}
                      />
                  }  
                </>
              :
                <h1>Escolha ou Adicione um Censo ➡</h1>
            }
            {
              partnerId &&
                <Button
                  text="Atualizar dados"
                  onClick={() => navigate("/update")} // TODO: fazer pagina de update
                />
            }
            {
              partnerId && admin &&
                <Button variant="cancel"
                  text="Deletar empresa"
                  onClick={() => {
                    api.delete(`/partner/${partnerId}`)
                      .then(() => navigate('/admin'))
                    // TODO: fazer verificação de retorno
                  }}
                />
            }
          </S.SideBarMiddle>
          <S.SideBarCard>
            <img src={partner?.logo} alt=""/>
          </S.SideBarCard>
        </S.SideBar>
        {
          partnerId && <CensusPage />
        }
        {
          censusId && (
            page === "Email" ? <EmailListing /> :
            page === "Perguntas" ? <QuestionsList /> :
            page === "Dashboard" ? <CensusDashboard /> :
            page === "Adesão" ? <h1>Adesão</h1> :
            <CensusPage />
          )
        }
      </S.MainStructure>
    </>    
  )
}

export default PartnerPage
