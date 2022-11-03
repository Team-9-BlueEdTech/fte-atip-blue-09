import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { usePartner } from "../../contexts/partner";
import api from "../../services/api";
import Button from "../Button";
import Header from "../Header";
import Input from "../Input";
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
    .min(8, "Reescreva sua senha neste campo.")
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
        navigate("/login");
      })
      .catch(() => {
        console.log("Senha inválida.");
      });
  };

  return (
    <>
      <Header />
      <S.MainDiv>
        <h1>Mudar senha</h1>
        <S.FormChangePassword onSubmit={handleSubmit(handleChangePassword)}>
          <Input
            placeholder="Nova Senha"
            type="password"
            {...register("password")}
          />
          <Input placeholder="Confirmação de senha" type="confirmPassword" />
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
