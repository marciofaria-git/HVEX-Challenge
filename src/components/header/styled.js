import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #10486d;
  gap: 40rem;
  width: 100%;
  height: 101px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #ffffff;
`;
export const UserLogout = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  border:none;
  line-height: 18px;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s ease-out;
  &:hover {
    filter: brightness(1.9);
    transform: scale(1.1);
    border-bottom:1px solid;
}
`;

export const Separator = styled.div`
  height: 1rem;
  border-left: 1px solid white;
`;
