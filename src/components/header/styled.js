import styled from "styled-components";

export const Desktop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10rem;
  background: #10486d;
  width: 100%;
  height: 101px;

  @media (max-width: 767px) {
    width: 100%;
    display:none;
    height: 119px;
    gap: 2rem;
  }


`;

export const Image = styled.img`
  width: 257px;
  height: 47px;

  @media (max-width: 767px) {
    display: none;
    width: 187px;
    height: 34px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const UserName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #ffffff;

  @media (max-width: 767px) {
    display: flex;
  }
`;
export const UserLogout = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  border: none;
  line-height: 18px;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s ease-out;
  &:hover {
    filter: brightness(1.9);
    transform: scale(1.1);
    border-bottom: 1px solid;
  }
`;

export const Separator = styled.div`
  height: 1rem;
  border-left: 1px solid white;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #10486d;
  height: 119px;
    gap: 0rem;


  @media (min-width: 767px) {
    display: none;
  }
`;
export const ImageMobile = styled.img`
  @media (max-width: 767px) {
    width: 187px;
    height: 34px;
  }

  @media (max-width: 390px) {
    width: 140px;
    height: 34px;
  }
`;

export const ContainerMobile = styled.div`
  display: flex;
  gap:10rem;
  align-items: center;

  @media (max-width: 390px) {
    gap:8rem;
  }
`;
