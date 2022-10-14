import * as Styled from "./styles";
import logo from "../../assets/images/image.png";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("O formato de e-mail está inválido")
    .required("Campo de e-mail obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      `Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula`
    )
    .required("Campo de senha obrigatório"),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post(`/auth/login`, data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        console.log("Usuário ou senha inválidos");
      });
  };

  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.ContainerModal>
          <h1>Login Empresa Parceira</h1>
          <img src={logo} alt="" />
          <Styled.ContainerModalForm onSubmit={handleSubmit(handleLogin)}>
            <div>
              <Styled.Span>
                <HiOutlineMail className="icon-react" />
                <input {...register("email")} />
              </Styled.Span>
            </div>
            <div>
              <Styled.Span>
                <RiLockPasswordLine className="icon-react" />
                <input type="password" {...register("password")} />
              </Styled.Span>
            </div>
            <Styled.ErrorMessage>
              {errors.email?.message || errors.password?.message}
            </Styled.ErrorMessage>
            <Styled.Button type="submit">Entrar</Styled.Button>
          </Styled.ContainerModalForm>
          <h2>Sua empresa ainda não possui cadastro?</h2>
        </Styled.ContainerModal>
      </Styled.Container>
    </Styled.Main>
  );
};

export default Login;
