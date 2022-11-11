import { createContext, ReactNode, useContext, useState } from "react";
import { Answers, Census } from "../types";
import api from "../services/api";
import { QuestionMap } from "../types/Questions";

interface CensusProviderProps {
  children: ReactNode;
};

interface CensusProviderData {
  census: Census | undefined;
  getCensusById: (censusId: string) => void;
  answers: Answers | undefined;
  getAnswersByCensusId: (censusId: string) => void;
  questions: QuestionMap | undefined;
};

const CensusContext = createContext<CensusProviderData>({} as CensusProviderData);

export const CensusProvider = ({ children }: CensusProviderProps) => {

  const [ census, setCensus ] = useState<Census>();  
  const [ questions, setQuestions ] = useState<QuestionMap>();
  const [ answers, setAnswers ] = useState<Answers>();

  const getCensusById = async (censusId: string) => {
    await api.get(
      `/census/${censusId}`
    )
    .then((res) => {
      setCensus(res.data);
      setQuestions(res.data.questions); 
    })
  };

  const getAnswersByCensusId = async (censusId: string) => {
    await api.get(`/answers/${censusId}`)
      .then((res) => {
        setAnswers(res.data)
      })
  }

  return (
    <CensusContext.Provider value={{ census, getCensusById, answers, getAnswersByCensusId, questions }}>
      { children }
    </CensusContext.Provider>
  );

};

export const useCensus = () => useContext(CensusContext);