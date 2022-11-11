import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Answers, Census } from "../types";
import api from "../services/api";
import { useParams } from "react-router-dom";

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

  const getCensusById = async (censusId: string) => {
    await api.get(
      `/census/${censusId}`
    )
    .then((res) => {
      setCensus(res.data); 
    })
  };

  const getAnswersByCensusId = async (censusId: string) => {
    await api.get(`/answers/${censusId}`)
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