import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Content, UserLogout, UserName, Separator } from "./styled";

export default function Header({login}) {
  return (
    <Container>
      <Image src="/images/logo.svg" width="257px" height="47px" />
      <Content>
          <UserName>
              {login.user}
          </UserName>
          <Separator/>
          <Link href="/">
          <UserLogout>Sair</UserLogout>
          </Link>
          
      </Content>
    </Container>
  );
}
