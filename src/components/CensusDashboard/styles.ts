import styled from 'styled-components'

export const MainDashboard = styled.div`

  width: 100%;
  height: 100%;
  background-color: #F3F3F3;
  border-radius: 2rem;
  padding: 1rem;
  gap: 1rem;

  display: flex;
  flex-direction: column;

`

export const DivFilters = styled.div`

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2rem;

`

export const Filter = styled.div`

  width: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

`

export const DivDashboard = styled.div`

  width: 100%;
  height: 100%;

  overflow: auto;
  overflow-x: hidden;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

`