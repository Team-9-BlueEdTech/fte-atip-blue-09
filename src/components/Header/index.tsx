import * as S from "./styles"
import logo from "../../assets/images/image.png"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { usePartner } from "../../contexts/partner"

const Header = () => {

  const navigate = useNavigate();

  const { partner } = usePartner();

  return (
    <S.Header>
      <img src={logo} alt="Logo da empresa aTip"/>
      <div>
        <h2>
          Jornada aTípica
          {
            partner && ` - ${partner.name}`
          }
        </h2>
      </div>
      <Button text="Sair" variant="cancel" onClick={() => navigate("/")} />
    </S.Header>
  )
}

export default Header