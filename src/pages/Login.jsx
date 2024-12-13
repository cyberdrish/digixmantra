import styled, { css } from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  height: 100vh;
`;

function Login() {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
