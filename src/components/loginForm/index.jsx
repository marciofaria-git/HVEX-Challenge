import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Button, Label, Name, ErrorMessage } from "./styled";
import Input from "../input/index";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Login({login}) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data, e) => {
    e.preventDefault();
    router.push("/dashboard");
    console.log(data);
  };

  console.log(login);
  const inputRef = React.createRef();

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Image src="/images/Logo_b.svg" width="399px" height="73px" />
      <Label className="label">
        E-mail
        <Input
          type="text"
          inputBorder={errors.userEmail ? "1px solid #CF1F2A" : null}
          {...register("userEmail", {
            required: true,
            validate: (userEmail) => userEmail == login.email,
          })}
        />
        <ErrorMessage>{errors.userEmail && "O email que voce inseriu nao existe"}</ErrorMessage>
      </Label>
      <Label className="label">
        Senha
        <Input
          type="password"
          inputBorder={errors.userPassword ? "1px solid #CF1F2A" : null}
          {...register("userPassword", {
            required: true,
            validate: (userPassword) => userPassword == login.password,
          })}
        />
        <ErrorMessage>{errors.userPassword && "A senha inserida está incorreta"}</ErrorMessage>
      </Label>

      <Button type="submit">LOGIN</Button>

      <Link href="/register">
        <Name>Registrar</Name>
      </Link>
    </Container>
  );
}
