import Login from "../components/loginForm/index";
import { Container } from "../styles/Home";
import { login } from "../service/login";

function Home() {
  return (
    <Container>
      <Login login={login} />
    </Container>
  );
}

export default Home;
