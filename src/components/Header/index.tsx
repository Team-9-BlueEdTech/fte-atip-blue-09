import * as S from "./styles"
import logo from "../../assets/images/image.png"
import Button from "../../components/Button"
import { usePartner } from "../../contexts/partner"
import { useAuth } from "../../contexts/auth"

const Header = () => {

  const { partner } = usePartner();
  const { logout } = useAuth();

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
      <Button text="Sair" variant="cancel" onClick={() => logout()} />
    </S.Header>
  )
}

export default Header