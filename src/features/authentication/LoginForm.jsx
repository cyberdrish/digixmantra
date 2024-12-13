import { useState } from "react";
import Button from "../../ui/Button";
// import { useLogin } from "./useLogin";
import styled, { css } from "styled-components";
import Logo from "../../ui/Logo";
import { Navigate, useNavigate } from "react-router-dom";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "main other";
  height: 100vh;
  align-items: center;
`;

const Img = styled.img`
  height: 100vh;
  width: 90%;
  object-fit: cover;
  background-color: var(--color-grey-900);
  animation: MoveUpDown 10s linear infinite;
  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 100px;
    }
  }
`;
const Main = styled.div`
  grid-area: main;
  animation: MoveUpDown 10s linear infinite;
  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 0;
    }
    50% {
      bottom: 100px;
    }
  }
`;

const StyledDiv = styled.div`
  padding: 10%;
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Towards Landing");

    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <LoginLayout>
      <Main>
        <Img src="/Login-Gif.png" alt="LogIn page"></Img>
      </Main>
      <Form onSubmit={handleSubmit}>
        <StyledDiv>
          <Logo type={"large"} />
          <Heading as={"h1"}>Sign in</Heading>
          <FormRowVertical label="Email address">
            <Input
              type="email"
              id="email"
              // This makes this form better for password managers
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </FormRowVertical>
          <FormRowVertical label="Password">
            <Input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </FormRowVertical>
          <FormRowVertical>
            <Button size="large" disabled={isLoading}>
              {!isLoading ? "Log in" : <SpinnerMini />}
            </Button>
          </FormRowVertical>
        </StyledDiv>
      </Form>
    </LoginLayout>
  );
}

export default LoginForm;
