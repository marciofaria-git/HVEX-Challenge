import React from "react";
import Link from "next/link";
import {
  Desktop,
  Content,
  UserLogout,
  UserName,
  Separator,
  Image,
  Mobile,
  ImageMobile,
  ContainerMobile
} from "./styled";

export default function Header({ login }) {
  return (
    <>
    {/* { BreakPoint Desktop } */}
    <Desktop>
      <Image src="/images/logo.svg" />
      <Content>
        <UserName>{login.user}</UserName>
        <Separator />
        <Link href="/">
          <UserLogout>Sair</UserLogout>
        </Link>
      </Content>
    </Desktop>

    {/* { BreakPoint Mobile } */}
    <Mobile>
        <ContainerMobile>
          <ImageMobile src="/images/logo.svg" />
          <Link href="/">
            <UserLogout>Sair</UserLogout>
          </Link>
        </ContainerMobile>

        <UserName>{login.user}</UserName>
      </Mobile>
    </>
  );
}
