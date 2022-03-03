import React from "react";
import Link from "next/link";
import {
  Container,
  Content,
  UserLogout,
  UserName,
  Separator,
  Image,
} from "./styled";

export default function Header({ login }) {
  return (
    <Container>
      <Image src="/images/logo.svg" />
      <Content>
      <UserName>{login.user}</UserName>
      <Separator />
      <Link href="/">
      <UserLogout>Sair</UserLogout>
      </Link>
      
      </Content>
      
    </Container>
  );
}
