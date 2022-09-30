import * as S from "./styles"
import logo from "../../../assets/images/logo-aTip.png"
import Button from "../../../components/Button"
import { useNavigate } from "react-router-dom"

const NavBarClone = () => {

  const Navigate = useNavigate();

  return (
    <S.NavCloneaTip>
      <img src={logo} alt="Logomarca da empresa aTip"/>
      <ul>
        <li>
          <a target="_blank" href="https://atip.io/">Home</a>
        </li>
        <li>
          <a target="_blank" href="https://atip.io/sobre-atip">Sobre a aTip</a>
        </li>
        <li>
          <a target="_blank" href="https://atip.io/para-atipicos">Para aTípicos</a>
        </li>
        <li>
          <a className="active" href="/para-empresas">Para Empresas</a>
        </li>
        <li>
          <a target="_blank" href="https://atip.io/member">aTip member</a>
        </li>
        <li>
          <a target="_blank" href="https://www.autismotech.com/">Autismo Tech</a>
        </li>
      </ul>
      <Button text="Pré-cadastro"
        onClick={() => Navigate("https://atip.io/selecao-perfil")}>
        
      </Button>
    </S.NavCloneaTip>
  )
}

export default NavBarClone