import NavBarClone from "./NavBarClone"
import * as S from "./styles"
import WelcomeImg from "../../assets/images/welcome01.png"

const Home = () => {  
  
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
            <button>Olá</button>
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
