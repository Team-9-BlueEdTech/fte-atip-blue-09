import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { usePartner } from "../../contexts/partner";
import api from "../../services/api";
import Button from "../Button";
import Header from "../Header";
import * as S from "./styles";
import * as yup from "yup";

interface ChangePassword {
  password: string;
  confirmPassword?: string;
}
const changePasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres.")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      `Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula.`
    )
    .required("Campo de senha obrigatório."),

  confirmPassword: yup
    .string()
    .min(8, "A senha e a confirmação devem ser iguais")
    .when("password", (password: string, field: any) =>
      password ? field.required().oneOf([yup.ref("password")]) : field
    ),
});

const ChangePassPage = () => {
  const { partnerId } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePassword>({ resolver: yupResolver(changePasswordSchema) });

  const handleChangePassword = (data: ChangePassword) => {
    api
      .patch(`partner/${partnerId}`, data)
      .then((res) => {
        console.log(res.data);
        
        navigate("/login");
      })
      .catch((e) => {
        console.error("Erro", e);
      });
  };

  return (
    <>
      <Header />
      <S.MainDiv>
        <h1>Mudar senha</h1>
        <S.FormChangePassword onSubmit={handleSubmit(handleChangePassword)}>
          <input
            placeholder="Nova Senha"
            type="password"
            {...register("password")}
          />
          <input
            placeholder="Confirmação de senha"
            type="password"
            {...register("confirmPassword")}          
          />
          <S.ErrorMessage>
            {errors.confirmPassword?.message || errors.password?.message}
          </S.ErrorMessage>
          <Button text="Enviar" variant="add" type="submit" />
        </S.FormChangePassword>
      </S.MainDiv>
    </>
  );
};

export default ChangePassPage;
