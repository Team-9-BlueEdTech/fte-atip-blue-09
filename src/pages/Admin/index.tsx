import Button from "../../components/Button";
import Listing from "../../components/Listing";
import { MockedPartnerList } from "../../mocks/route-admin-partners";
import { PartnerIndex } from "../../types";
import { DivDashboard, MainDashboard, NavDashBoard } from "./styles";

const Admin = () => {  
  return (
    <>
      <MainDashboard>
        <NavDashBoard>
          <Button
            variant="add"
            text="Cadastrar"
          />
          <Button
            text="Buscar"
          />
        </NavDashBoard>
        <DivDashboard>
          {MockedPartnerList.map((partner: PartnerIndex) =>
            <Listing
              id={partner.id}
              name={partner.name}
              submit={partner.submit}
              createdAt={partner.createdAt}
            />
          )}
        </DivDashboard>
      </MainDashboard>
    </>
  )
}

export default Admin
