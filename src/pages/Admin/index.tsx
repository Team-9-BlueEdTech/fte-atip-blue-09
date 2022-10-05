import Button from "../../components/Button";
import Input from "../../components/Input";
import Listing from "../../components/Listing/partner";
import { MockedPartnerList } from "../../mocks/route-admin-partners";
import { PartnerIndex } from "../../types";
import * as S from "./styles";

const Admin = () => {  
  return (
    <>
      <S.MainDashboard>
        <S.NavDashboard>
          <Button
            variant="add"
            text="Cadastrar"
          />
          <Input
            inputSize="large"
          />
          <Button
            variant="small"
            text="⬆⬇"
          />
        </S.NavDashboard>
        <S.DivDashboard>
          {MockedPartnerList.map(
            (partner: PartnerIndex) =>
              <Listing
                id={partner.id}
                name={partner.name}
                submit={partner.submit}
                createdAt={partner.createdAt}
              />
          )}
        </S.DivDashboard>
      </S.MainDashboard>
    </>
  )
}

export default Admin
