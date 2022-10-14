import * as S from "./styles"
import logo from "../../assets/images/image.png"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

const Header = () => {

  const Navigate = useNavigate();

  return (
    <S.HeaderaTip>
      <img src={logo} alt="Logo da empresa aTip"/>
      <div>
          <p>Jornada aTípica - </p>
      </div>
      <Button text="Sair" variant="cancel" onClick={() => Navigate("/")} />
    </S.HeaderaTip>
  )
}

export default Header