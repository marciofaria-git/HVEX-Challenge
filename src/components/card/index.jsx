import {
  DisplayUser,
  UserRepo,
  UserBio,
  UserFrom,
  UserName,
  UserProfile,
  UserAvatar,
  UserLink,
  Content,
  Container,
} from "./styled";
import Image from "next/image";

export default function Card({data}) {
  return (
    <DisplayUser>
      <UserAvatar src={data.avatar_url}/>
      <UserProfile>
        <Container>
          <UserName>
            {data?.login}
            <Content>{data?.email}</Content>
          </UserName>
          <UserRepo>
            {data?.public_repos}
            <Content>Repo. Públicos</Content>
          </UserRepo>
        </Container>

        <UserFrom>
          De:
          <Content>{data?.location}</Content>
        </UserFrom>
        <UserBio>
          Bio:
          <Content>
            {data?.bio}
          </Content>
        </UserBio>
        <UserLink  target="_blank" href={data.html_url}>Acessar Perfil</UserLink>
      </UserProfile>
    </DisplayUser>
  );
}
