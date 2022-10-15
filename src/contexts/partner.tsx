import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Partner } from "../types";
import { MockedPartner } from "../mocks/route-partner-id";

interface PartnerProviderProps {
  children: ReactNode;
};

interface PartnerProviderData {
  partner: Partner | undefined;
  getPartnerById: (partnerId: string) => void;
};

const PartnerContext = createContext<PartnerProviderData>({} as PartnerProviderData);

export const PartnerProvider = ({ children }: PartnerProviderProps) => {

  const [ partner, setPartner ] = useState<Partner>();

  const getPartnerById = (partnerId: string) => {
    //api.get by partnerId
    setPartner(MockedPartner)
  };

  return (
    <PartnerContext.Provider value={{ partner, getPartnerById }}>
      { children }
    </PartnerContext.Provider>
  );

};

export const usePartner = () => useContext(PartnerContext);

