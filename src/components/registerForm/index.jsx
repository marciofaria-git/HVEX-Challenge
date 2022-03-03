import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import Image from "next/image";
import { Container, Button, Label, Name, ErrorMessage } from "./styled";
import Input from "../input/index";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm();

const router = useRouter();
  const onSubmit = (data) => {
    router.push("/")
    console.log("Cadastrado com Sucesso");
  };

  const inputRef = React.createRef();

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Image src="/images/Logo_b.svg" width="399px" height="73px" />
      <Label>
        E-mail
        <Input
          ref={inputRef}
          type="text"
          {...register("userEmail", { required: true })}
        />
        <ErrorMessage>{errors.userEmail && "Email invalido"}</ErrorMessage>
      </Label>
      <Label>
        Senha
        <Input
          type="password"
          inputBorder={errors.rePassword ? "1px solid #CF1F2A" : null}
          {...register("userPassword", {
            required: true,
            validate: (userPassword) =>
              userPassword === getValues("rePassword"),
          })}
        />
      </Label>
      <Label>
        Confirmar Senha
        <Input
          type="password"
          inputBorder={errors.rePassword ? "1px solid #CF1F2A" : null}
          {...register("rePassword", {
            validate: (rePassword) => rePassword === getValues("userPassword"),
          })}
        />
        <ErrorMessage>
          {errors.rePassword && "Senhas não coincidem"}
        </ErrorMessage>
      </Label>

      <Button validate={!isValid ? false : true} type="submit">
        CADASTRAR
      </Button>
    </Container>
  );
}
