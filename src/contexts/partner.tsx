import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Partner } from "../types";
import { MockedPartner } from "../mocks/route-partner-id";
import api from "../services/api";

interface PartnerProviderProps {
  children: ReactNode;
};

interface PartnerProviderData {
  partner: Partner | undefined;
  setPartner: Dispatch<SetStateAction<Partner | undefined>>
  getPartnerById: (partnerId: string) => void;
};

const PartnerContext = createContext<PartnerProviderData>({} as PartnerProviderData);

export const PartnerProvider = ({ children }: PartnerProviderProps) => {

  const [ partner, setPartner ] = useState<Partner>();

  const getPartnerById = async (partnerId: string) => {
    await api.get(`/partner/${partnerId}`)
      .then((res) => {        
        setPartner(res.data)
      })
      .catch((e) => {
        console.error(e)
      })
  };

  return (
    <PartnerContext.Provider value={{ partner, setPartner, getPartnerById }}>
      { children }
    </PartnerContext.Provider>
  );

};

export const usePartner = () => useContext(PartnerContext);

