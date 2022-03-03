import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Button,
  Label,
  Name,
  ErrorMessage,
  Content,
  Img
} from "./styled";
import Input from "../input/index";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Login({ login }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const router = useRouter();

  //Funcaçao para fazer request da api
  const onSubmit = (data, e) => {
    e.preventDefault();
    router.push("/dashboard");

  };

  

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Img src="/images/Logo_b.svg" />
      <Label className="label">
        E-mail
        <Content>
          <Input
            type="text"
            inputBorder={errors.userEmail ? "1px solid #CF1F2A" : null}
            {...register("userEmail", {
              required: true,
              validate: (userEmail) => userEmail == login.email,
            })}
          />
          <ErrorMessage>
          {errors.userEmail && "O email que voce inseriu nao existe"}
        </ErrorMessage>
        </Content>
        
      </Label>
      <Label className="label">
        Senha
        <Content>
          <Input
            type="password"
            inputBorder={errors.userPassword ? "1px solid #CF1F2A" : null}
            {...register("userPassword", {
              required: true,
              validate: (userPassword) => userPassword == login.password,
            })}
          />
          <ErrorMessage>
          {errors.userPassword && "A senha inserida está incorreta"}
        </ErrorMessage>
        </Content>
        
      </Label>

      <Button type="submit">LOGIN</Button>

      <Link href="/register">
        <Name>Registrar</Name>
      </Link>
    </Container>
  );
}
