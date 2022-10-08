import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Listing from "../../components/Listing/partner";
import { MockedPartnerList } from "../../mocks/route-admin-partners";
import { PartnerIndex } from "../../types";
import { Div } from "../Login/styles";
import * as S from "./styles";

const Admin = () => {

  const navigate = useNavigate();

  const [partnersList, setPartnersList] = useState<PartnerIndex[] | undefined>(undefined);
  const [search, setSearch] = useState<string>("");
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const loadPartners = () => {
    //api.get
    setPartnersList(MockedPartnerList)
  }

  useEffect(() => {
    loadPartners()
  }, [])

  const searchPartner = (partner: PartnerIndex) => {
    if (search === "") {
      return partner;
    } else if (partner.name.toLowerCase().includes(search)) {
      return partner;
    }
  }

  const setFilter = (filter: string) => {

    let sortedList: PartnerIndex[] | undefined;

    if (filter === "A") {
      sortedList = partnersList?.sort((a, b) => {
        if (b.name > a.name) return -1;
        if (b.name < a.name) return 1;
        return 0;
      })
    }
    if (filter === "Z") {
      sortedList = partnersList?.sort((a, b) => {
        if (b.name > a.name) return 1;
        if (b.name < a.name) return -1;
        return 0;
      })
    }

    setPartnersList(sortedList)
    setShowFilter(false)
  }

  return (
    <>
      <S.MainDashboard>
        <S.NavDashboard>
          <Button variant="add" text="Cadastrar"
            onClick={() => navigate("/partner/new")}  
          />
          <input type="text"
            placeholder="🔎  Digite o nome de uma empresa"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button text="Filtrar" 
            onClick={() => setShowFilter(!showFilter)}
          />
        </S.NavDashboard>
        <S.DivDashboard>
          {
            partnersList?.filter(searchPartner).map((partner, index) =>
              <Listing
                key={index}
                id={partner.id}
                name={partner.name}
                submit={partner.submit}
                createdAt={partner.createdAt}
              />
            )
          }
          {
            showFilter ?
              <S.FilterDashboard>
                <Button variant="small" text="A ⬇"
                 onClick={() => setFilter("A")}
                />
                <Button variant="small" text="Z ⬇"
                  onClick={() => setFilter("Z")}
                />
                {/* <Button variant="small" text="⌛ ⬇"
                  onClick={() => setFilter("New")}
                />
                <Button variant="small" text="⌛ ⬆"
                  onClick={() => setFilter("Old")}
                /> */}
              </S.FilterDashboard>
            : null
          }
        </S.DivDashboard>
      </S.MainDashboard>
    </>
  )
}

export default Admin
