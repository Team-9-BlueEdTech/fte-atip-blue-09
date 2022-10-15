import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Button from "../../components/Button";
import { usePartner } from "../../contexts/partner";
import * as S from "./styles";

const PartnerPage = () => {

  const navigate = useNavigate();

  const { partnerId } = useParams();
  const { partner, getPartnerById } = usePartner();

  const [admin, setAdmin] = useState<boolean>(true)
  const [spinner, setSpinner] = useState<boolean>(false)

  useEffect(() => {
    if (partnerId)
    getPartnerById(partnerId);
  }, []);

  return (

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
          <h1>Escolha ou Adicione um Censo ➡</h1>
        </S.SideBarMiddle>
        <S.SideBarCard>
          <img src={partner?.logo} alt=""/>
        </S.SideBarCard>
      </S.SideBar>
      <S.Dashboard>
        {
          partner?.census.map
          (census => 
            <S.CensusCard
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
      </S.Dashboard>
    </S.MainStructure>
  )
}

export default PartnerPage
