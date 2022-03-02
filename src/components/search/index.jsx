import { Container, Label, Content, IconBox } from "./styled";
import Input from "../input/index";
import Image from "next/image";

export default function Search({handleSubmit, handleOnChange}) {
  return (
    <Container>
      <Label>
        Digite o nome do usuário ou e-mail:
        <Content>
          <Input onChange={handleOnChange}/>
          <IconBox onClick={handleSubmit}>
            <Image
              src="/images/search_black_24dp.svg"
              width="37px"
              height="30.61px"
            />
          </IconBox>
        </Content>
      </Label>
    </Container>
  );
}
