import styled from 'styled-components'

export const MainDashboard = styled.div`

  width: 100%;
  height: 100%;
  background-color: #F3F3F3;
  border-radius: 2rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;

`

export const MainFilters = styled.div`

  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;

`

export const DivFilters = styled.div`

  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;

`

export const DivOptions = styled.div`

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

`

export const Filter = styled.div`

  text-align: center;

`

export const DivDashboard = styled.div`

  overflow: auto;
  overflow-x: hidden;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

`