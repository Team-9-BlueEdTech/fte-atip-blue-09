import styled from "styled-components";

export const Main = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  width: 100%;
  height: 100vh;
  position: absolute;
  outline: none;
`;

export const Container = styled.div`
  margin: 2.5% auto;
  display: flex;
  align-items: center;
  width: 90%;
  height: 90vh;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: auto;
  margin: 0 auto;
  flex-wrap: wrap;
  //border: 1px solid black;
  padding-inline-start: 10%;
  img {
    width: 360px;
    height: 200px;
  }
`;
export const Modal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  div {
    background-color: #dcdcdc;
    height: 40px;
    padding: 10px;
    border-radius: 8px;
    margin: 25px 0;
  }
`;
export const Form = styled.form`
  margin: 50px 0 70px 0;
`;
export const Span = styled.span`
  background-color: #dcdcdc;
  display: flex;

  input {
    width: 290px;
    padding: 2px;
    background-color: #dcdcdc;
    margin: auto 0;
    outline: none;
  }
  .icon-react {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  height: 40px;
  width: 335px;
  background-color: #aa6cff;
  border-radius: 8px;
  box-shadow: 1px 1px 1px;
  cursor: pointer;
`;


export const ErrorMessage = styled.p`
    color: red;
    align-self: center;
    font-size: small;
    height: 1rem;
`;
