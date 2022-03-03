import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 608px;
  height: 514px;

  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 450px) {
    width: 350px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 0;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: 700;
  width: 259px;
  height: 59px;
  background: #10486d;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
    transform: scale(0.9);
  }

  @media (max-width: 450px) {
    width: 150px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;
export const Name = styled.a`
  color: #10486d;
  cursor: pointer;
  font-size: 24px;
  border-bottom: 1px solid #10486d;
`;

export const ErrorMessage = styled.p`
  color: #cf1f2a;
  padding: 9px 0 0 10px;;
`;

export const Img = styled.img`
width:399px;
height:73px;

@media (max-width: 450px) {
  width: 300px;
}
`