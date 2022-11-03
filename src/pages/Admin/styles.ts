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

export const DivDashboardNewPartner = styled(DivDashboard)`
    display: flex;
    align-items: center;
    justify-content: center;
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

export const DivDashboardForm = styled.form`
    width: 30rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    .inputText::placeholder{
      display: flex;
      text-align: center;
      font-size: 1.2rem;
    }
    .inputText:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #ccc inset;
}
    .inputText:focus{
      outline: none;
    }
`;
