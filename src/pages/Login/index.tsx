import * as Styled from "./styles";
import logo from "../../assets/images/image.png";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.Div>
          <img src={logo} alt="" />
          <Styled.Modal>
            <h1>Login Empresa Parceira</h1>
            <Styled.Form>
              <div>
                <Styled.Span>
                  <HiOutlineMail className="icon-react" />
                  <input />
                </Styled.Span>
              </div>
              <div>
                <Styled.Span>
                  <RiLockPasswordLine className="icon-react" />
                  <input type="password" />
                </Styled.Span>
              </div>
              <Styled.Button>Entrar</Styled.Button>
            </Styled.Form>
            <h2>Sua empresa ainda não possui cadastro?</h2>
          </Styled.Modal>
        </Styled.Div>
      </Styled.Container>
    </Styled.Main>
  );
};

export default Login;
