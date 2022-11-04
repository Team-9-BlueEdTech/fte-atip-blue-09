import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

interface LoginData {
  email: string;
}

const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("O formato de e-mail está inválido")
    .required("Campo de e-mail obrigatório"),
});
const NewPartner = () => {
  const { admin } = useAuth()

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(emailSchema) });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    api.post("/partner").then(console.log);
  };
  return (
    <>
      <Header />
      <S.MainDashboard>
        { admin ?
          <S.NavDashboard>
            <Button
              text="Voltar"
              variant="add"
              onClick={() => navigate("/admin")}
            />
          </S.NavDashboard>
        : null }
        <S.DivDashboardNewPartner>
          <S.DivDashboardForm onSubmit={handleLogin}>
            <Input
              inputSize="x-large"
              placeholder="E-mail"
              className="inputText"
              {...register("email")}
            />
            <Button variant="login-size" type="submit" text="Enviar" />
          </S.DivDashboardForm>
        </S.DivDashboardNewPartner>
      </S.MainDashboard>
    </>
  );
};

export default NewPartner;
