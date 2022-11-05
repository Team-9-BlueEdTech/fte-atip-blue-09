import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const ContainerModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  gap: 2rem;

  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  
  img {
    width: 260px;
    height: auto;
  }
`;

export const ErrorMessage = styled.p`
    color: red;
    align-self: center;
    font-size: small;
    height: 1rem;
    margin: -10px 0 25px 0;
    max-width: 330px;
`;
