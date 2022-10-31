import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(emailSchema) });

  const handleLogin = () => {
    api.post("/").then().catch();
  };
  return (
    <>
      <Header />
      <S.MainDashboard>
        <S.NavDashboard>
          <Button
            text="Voltar"
            variant="add"
            onClick={() => navigate("/admin")}
          />
        </S.NavDashboard>
        <S.DivDashboardNewPartner>
          <S.DivDashboardForm onSubmit={handleSubmit(handleLogin)}>
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
