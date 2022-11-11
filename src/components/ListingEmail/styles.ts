import styled from 'styled-components'

export const DivDashboard = styled.div`

  width: 100%;
  height: 100%;
  background-color: #F3F3F3;
  border-radius: 2rem;
  padding: 2rem;
  
  position: relative;

  overflow: auto;
  overflow-x: hidden;

`

export const DashLine = styled.div`

  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 1rem;
  margin: 5px;
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #ddd;
  }

  h2 {
    width: 60%;
  }

`