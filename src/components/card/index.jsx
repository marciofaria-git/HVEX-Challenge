//Importaçoes Styles
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
  UserEmail,
  ContainerInfo,
  UserLogin,
  ContainerHeader,
  Repo,
} from "./styled";


export default function Card({ data }) {
  return (
    <DisplayUser>
      <UserAvatar src={data.avatar_url} />
      <UserProfile>
        <ContainerHeader>
          <UserName>
            <UserLogin>{data?.login}</UserLogin>
            <UserEmail>{data?.email}</UserEmail>
          </UserName>

          <UserRepo>
            {data?.public_repos}&nbsp;
            <Repo>Repo. Públicos</Repo>
          </UserRepo>
        </ContainerHeader>

        <ContainerInfo>
          <UserFrom>
            De:&nbsp;
            <Content>{data?.location}</Content>
          </UserFrom>
          <UserBio>
            Bio:&nbsp;
            <Content>{data?.bio}</Content>
          </UserBio>
        </ContainerInfo>

        <UserLink target="_blank" href={data.html_url}>
          Acessar Perfil
        </UserLink>
      </UserProfile>
    </DisplayUser>
  );
}
