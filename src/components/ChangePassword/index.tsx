import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services/api";
import Button from "../Button";
import Header from "../Header";
import Input from "../Input";
import * as S from "./styles";

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
    .required("Campo de senha obrigatório."),
});

const ChangePassPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePassword>({ resolver: yupResolver(changePasswordSchema) });

  const handleChangePassword = (data: ChangePassword) => {
    api
      .patch(`/update/`,data)
      .catch(() => {
        console.log("Senha inválida");
      });
  };

  // const confirmPassword = (password: string, confirmPassword: string) => {
  //   if (confirmPassword !== password) {
  //     errors.confirmPassword?.message;
  //   }
  // };

  return (
    <>
      <Header />
      <S.MainDiv>
        <h1>Mudar senha</h1>
        <S.DivInput>
          <Input
            placeholder="Nova Senha"
            type="password"
            {...register("password")}
          />
          <Input
            placeholder="Confirmação de senha"
            type="confirmPassword"
            {...register("confirmPassword")}
          />
        </S.DivInput>
        <Button text="Enviar" variant="add" />
      </S.MainDiv>
    </>
  );
};

export default ChangePassPage;
