import styled from 'styled-components'

export const MainDashboard = styled.main`

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 4rem;

`

export const NavDashboard = styled.section`

  height: 3rem;
  margin: 7px 0px;
  display: flex;
  gap: 1rem;

`

export const DivDashboard = styled.div`

  height: 100%;
  background-color: #F3F3F3;
  border-radius: 2rem;
  padding: 2rem;
  
  position: relative;

  overflow: auto;
  overflow-x: hidden;

`

export const FilterDashboard = styled.div`

  width: 20rem;
  height: 5rem;
  background-color: white;
  border: solid 2px;
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: absolute;
  top: 0;
  right: 0;



`