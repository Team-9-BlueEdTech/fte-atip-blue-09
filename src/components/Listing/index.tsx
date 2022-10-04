import * as S from './styles'
import { PartnerIndex } from "../../types"
import { useNavigate } from "react-router-dom"

const Listing = ( partner: PartnerIndex ) => {

  const navigate = useNavigate();

  return (
    <>
      <S.DashLine
        onClick={() => {navigate(
          `/partner/${partner.id}`
        )}}
      >
        <h2>{partner.name}</h2>
        <p>{partner.createdAt}</p>
      </S.DashLine>
    </>
  )
}

export default Listing