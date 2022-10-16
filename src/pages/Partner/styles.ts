import styled from "styled-components";

export const MainStructure = styled.main`

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  padding-top: 6rem; //for navbar
  gap: 1rem;

`

export const SideBar = styled.nav`

  width: 11.5rem;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 5fr 1.5fr;

`

export const SideBarMiddle = styled.div`

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 2rem;

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
