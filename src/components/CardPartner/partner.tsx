import * as S from './styles'
import { PartnerIndex } from "../../types"
import { useNavigate } from "react-router-dom"
import { DateTime } from "luxon";

const PartnerListing = (partner: PartnerIndex) => {

  const navigate = useNavigate();

  return (
    <>
      <S.DashLine
        onClick={() => {
          navigate(`/partner/${partner.id}`)
        }}
      >
        <h2>{partner.name}</h2>
        <p>{DateTime.fromISO(partner.createdAt).toLocaleString()}</p>
      </S.DashLine>
    </>
  )
}

export default PartnerListing