import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Answers, Census } from "../types";
import { MockedCensus } from "../mocks/route-census-id";
import api from "../services/api";

interface CensusProviderProps {
  children: ReactNode;
};

interface CensusProviderData {
  census: Census | undefined;
  getCensusById: (censusId: string) => void;
  answers: Answers | undefined;
  getAnswersByCensusId: (censusId: string) => void;
};

const CensusContext = createContext<CensusProviderData>({} as CensusProviderData);

export const CensusProvider = ({ children }: CensusProviderProps) => {

  const [ census, setCensus ] = useState<Census>();
  const [ answers, setAnswers ] = useState<Answers>()

  const getCensusById = (censusId: string) => {
    //api.get censusId
    setCensus(MockedCensus)
  };

  const getAnswersByCensusId = (censusId: string) => {
    api.get(`/answers/${censusId}`)
      .then((res) => {
        setAnswers(res.data)
      })
  }  

  return (
    <CensusContext.Provider value={{ census, getCensusById, answers, getAnswersByCensusId }}>
      { children }
    </CensusContext.Provider>
  );

};

export const useCensus = () => useContext(CensusContext);