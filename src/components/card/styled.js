import styled from "styled-components";

export const ContentRepo = styled.div`
display:flex;
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  @media (max-width: 767px) {
    justify-content: center;
    height: 125px;
  }

  @media (max-width: 390px) {
    justify-content: center;
    height: 125px;
  }
  
  
`;

export const UserLogin = styled.div`
  display: flex;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const ContainerHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DisplayUser = styled.div`
  display: flex;
  width: 634px;
  height: 184px;
  align-items: center;
  padding: 1rem;
  gap:1rem;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 388px;
    height: 427px;
  }

  @media (max-width: 390px) {
    jdisplay: flex;
    flex-direction: column;
    width: 300px;
    height: 427px;
`;
export const UserName = styled.div`
  font-family: Roboto;
  align-items: baseline;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #484a4c;
`;

export const UserEmail = styled.div`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #484a4c;

  @media (max-width: 767px) {
    justify-content: center;
  
  }
`;
export const UserRepo = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #484a4c;
  @media (max-width: 767px) {
    margin-top:13px;
  }
`;

export const UserFrom = styled.div`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  align-items: baseline;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #484a4c;
  margin-bottom: 9px;
`;
export const UserBio = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Roboto;
  align-items: baseline;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #484a4c;
  margin-bottom: 9px;
`;
export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  width:80%;
  
  @media (max-width: 767px) {
    display:flex;
    flex-direction: column;
    width:100%;
    height: 243px
  }
`;

export const UserLink = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 7px;
  color: #484a4c;
  @media (max-width: 767px) {
    display: flex;
    margin-top: 3rem;
    justify-content: center;
  }
`;

export const UserAvatar = styled.img`
  display: flex;

  justify-content: center;
  width: 133px;
  height: 133px;

  border: 6px solid #1c2c44;
  border-radius: 65px;
  overflow: hidden;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.fontSize || "14px"};
  line-height: 16px;

  color: #484a4c;
`;

export const Repo = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #484A4C;
`