import Button from "../Button";
import Header from "../Header";
import Input from "../Input";
import * as S from "./styles";

const ChangePassPage = () => {

  return (
    <>
      <Header />
      <S.MainDiv>
        
        <Input placeholder="Input" />
        <Button text="Botão" />
      </S.MainDiv>
    </>

  )

}

export default ChangePassPage