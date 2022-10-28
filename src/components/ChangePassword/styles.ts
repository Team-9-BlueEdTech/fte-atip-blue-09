import styled from "styled-components";

export const MainDiv = styled.main`

  width: 100vw;
  height: 100vh;
  padding-top: 6rem; //for navbar

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


`
export const FormChangePassword = styled.form`

height: 30vh;
align-items: center;
display: flex;
flex-direction: column;
margin: 20px 0 0 0 ;

input {
  margin: 10px;
}

`

export const ErrorMessage = styled.p`
color: red;
align-self: center;
font-size: small;
height: 1rem;
margin: 10px 0 25px 0;
max-width: 330px;
`;
