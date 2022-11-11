import * as Styled from "./styles";
import logo from "../../assets/images/image.png";
import Button from "../../components/Button/index";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import * as yup from "yup";
import { redirect, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

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
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post(`/auth`, data)
      .then((res) => {
        if (res.data.admin) {
          login({ token: res.data.token, user: res.data.admin });
        } else {
          login({ token: res.data.token, user: res.data.partner });
        }
      })
      .catch((e) => {
        console.log(e, "Usuário ou senha inválidos");
      });
  };

  return (
    <Styled.Container>
      <Styled.ContainerModal>
        <h1>Login Empresa Parceira</h1>
        <img src={logo} alt="" />
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* <HiOutlineMail /> */}
          <input {...register("email")}
            placeholder="E-mail"
          />
          {/* <RiLockPasswordLine /> */}
          <input type="password" {...register("password")}
            placeholder="Senha"
          />
          <Styled.ErrorMessage>
            {errors.email?.message || errors.password?.message}
          </Styled.ErrorMessage>
          <Button text="Entrar" variant="login-size" type="submit"/>
        </form>
        <h2>Sua empresa ainda não possui cadastro?</h2>
      </Styled.ContainerModal>
    </Styled.Container>

  );
};

export default Login;
