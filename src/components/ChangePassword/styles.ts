import styled from "styled-components";

export const MainDiv = styled.main`

  width: 100vw;
  height: 100vh;
  padding-top: 6rem; //for navbar

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

`
export const FormChangePassword = styled.form`

  width: 30vw;
  display: flex;
  flex-direction: column;

`

export const ErrorMessage = styled.p`

  color: red;
  font-size: small;

`;
