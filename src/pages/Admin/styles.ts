import styled from "styled-components";

export const MainDashboard = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 6rem; //for navbar
  gap: 1rem;

`;

export const NavDashboard = styled.section`
  height: 3rem;
  display: flex;
  gap: 1rem;
`;

export const DivDashboard = styled.div`
  height: 100%;
  background-color: #f3f3f3;
  border-radius: 2rem;
  padding: 2rem;
  
  position: relative;

  overflow: auto;
  overflow-x: hidden;

`;

export const FormNewPartner = styled.form`

  width: 80%;
  margin: auto;

`;

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
`;

export const ErrorMessage = styled.p`
color: red;
align-self: center;
font-size: small;
height: 1rem;
margin: -10px 0 25px 0;
max-width: 330px;
`;
