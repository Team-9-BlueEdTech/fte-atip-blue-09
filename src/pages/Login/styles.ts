import styled from "styled-components";

export const Main = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  width: 100%;
  height: 100vh;
  position: absolute;
  outline: none;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  //background-color: whitesmoke;
  //background-color: #AA6CFF;
  //background-color: #a96cff5b;
  //background-color: #a96cff10;

`;


export const ContainerModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  div {
    background-color: #dcdcdc;
    height: 40px;
    padding: 10px;
    border-radius: 8px;
    margin: 25px 0;
  }
  img {
    width: 260px;
    height: 100px;
    margin: 60px 0 -40px 0;
  }
`;
export const ContainerModalForm = styled.form`
  margin: 80px 0;
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
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #dcdcdc inset;
}
  .icon-react {
    margin-right: 10px;
  }
`;

/*export const Button = styled.button`
  padding: 10px;
  height: 40px;
  width: 100%;
  margin-top: -10px;
  background-color: #aa6cff;
  border-radius: 8px;
  box-shadow: 0.5px 0.5px;
  cursor: pointer;
`;
*/


export const ErrorMessage = styled.p`
    color: red;
    align-self: center;
    font-size: small;
    height: 1rem;
    margin: -10px 0 25px 0;
    max-width: 330px;
`;
