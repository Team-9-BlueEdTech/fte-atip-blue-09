import Header from "../../components/Header";
import Button from "../../components/Button";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

interface RegisterData {
  email: string;
  name: string;
  logo: string;
}

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("O formato de e-mail está inválido")
    .required("Campo de e-mail obrigatório"),
  name: yup
    .string()
    .required("Nome da empresa é obrigatório"),
  logo: yup
    .string()
    .required("Insira um URL para a imagem da empresa")
});

const NewPartner = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(registerSchema) });

  const handleLogin = (data: RegisterData) => {    
    api
      .post("/partner", data)
      .then((res) => {
        navigate("/admin");        
      });
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
        <S.DivDashboard>
          <form onSubmit={handleSubmit(handleLogin)}>
            <input {...register("email")} />
            <input {...register("name")} />
            <input {...register("logo")} />
            <Button type="submit" text="Enviar" />
          </form>
        </S.DivDashboard>
      </S.MainDashboard>
    </>
  );
};

export default NewPartner;
