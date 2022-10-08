import * as S from "./styles"
import logo from "../../../assets/images/logo-aTip.png"
import Button from "../../../components/Button"

const NavBarClone = () => {

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
      <Button
        text={<a target="_blank" href="https://atip.io/selecao-perfil">Pré-cadastro</a>}
      >
        
      </Button>
    </S.NavCloneaTip>
  )
}

export default NavBarClone