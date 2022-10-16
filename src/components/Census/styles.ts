import styled from "styled-components";

export const CensusDashboard = styled.div`

  width: 100%;
  height: 100%;
  padding: 2rem;
  gap: 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  background-color: #f1f1f1;
  border-radius: 1rem;

  overflow: auto;

`

export const CensusCard = styled.div`

  width: 11.5rem;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #DCDCDC;
  border-radius: 1rem;
  box-shadow: 0px 1px 3px;

  cursor: pointer;

  :hover {
    background-color: #a7a7a7;
  }

`