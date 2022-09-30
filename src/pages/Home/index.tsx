import NavBarClone from "./NavBarClone"
import * as S from "./styles"
import WelcomeImg from "../../assets/images/welcome01.png"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <header>
        <NavBarClone />
      </header>

      <S.MainEmpresasContainer>
        <S.SectionEmpresasHeader>
          <div>
            <h1>Para Empresas</h1>
            <p>Uma plataforma especializada em encontrar e selecionar</p>
            <span> talentos neuroatípicos.</span>
            <Button
              text="Login Empresa"
              onClick={() => navigate("/login")}
            />
          </div>
          <div>
            <img src={WelcomeImg} alt=""/>
          </div>
        </S.SectionEmpresasHeader>
      </S.MainEmpresasContainer>
    </>
  )
}

export default Home
