import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Census } from "../types";
import { MockedCensus } from "../mocks/route-census-id";

interface CensusProviderProps {
  children: ReactNode;
};

interface CensusProviderData {
  census: Census | undefined;
  getCensusById: (censusId: string) => void;
};

const CensusContext = createContext<CensusProviderData>({} as CensusProviderData);

export const CensusProvider = ({ children }: CensusProviderProps) => {

  const [ census, setCensus ] = useState<Census>();

  const getCensusById = (censusId: string) => {
    //api.get censusId
    setCensus(MockedCensus)
  };

  return (
    <CensusContext.Provider value={{ census, getCensusById }}>
      { children }
    </CensusContext.Provider>
  );

};

export const useCensus = () => useContext(CensusContext);