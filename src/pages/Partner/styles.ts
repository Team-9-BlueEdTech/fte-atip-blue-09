import styled from "styled-components";

export const MainStructure = styled.main`

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  padding-top: 4rem; //for navbar
  gap: 1rem;

`

export const SideBar = styled.nav`

  width: 11.5rem;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 5fr 2fr;

`

export const SideBarMiddle = styled.div`

  display: flex;
  text-align: center;
  align-items: center;

`

export const SideBarCard = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #DCDCDC;
  border-radius: 2rem;
  box-shadow: 0px 2px 5px;

  img {
    width: 100%;
  }

`

export const Dashboard = styled.div`

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
  box-shadow: 0px 2px 5px;

  cursor: pointer;

  :hover {
    background-color: #a7a7a7;
  }

`