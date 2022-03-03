import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 608px;
  height: 675px;

  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 450px) {
    width:350px;
   }
`;

export const Button = styled.button`
  transition: all 0.3s ease;
  text-transform: uppercase;
  color: white;
  font-size: 24px;
  font-weight: 700;
  width: 259px;
  height: 59px;
  background: ${props => props.validate == true ? "#10486D":"rgba(16, 72, 109, 0.5)"};
  border-radius: 8px;
  border: none;
  cursor: pointer;
 
`;
export const Label = styled.div`
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
color:#CF1F2A;
padding: 9px 0 0 10px;;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 0;

  @media (max-width: 450px) {
    font-size: 18px;
  }
`;
