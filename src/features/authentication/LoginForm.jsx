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
import SignupForm from "./SignupForm";

const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "main other";
  height: 100vh;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas: "other";
  }
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
  @media (max-width: 1024px) {
    display: none; /* Hides the image on smaller screens */
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
  const [openSignup, setOpenSignUp] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <LoginLayout>
      <Main>
        <Img src="/Login-Gif.png" alt="LogIn page"></Img>
      </Main>
      {!openSignup ? (
        <Form onSubmit={handleSubmit}>
          <Logo type={"large"} renderedAt={"Login"} />
          <StyledDiv>
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
            <FormRowVertical>
              <Heading
                as="h3"
                $styles={css`
                  text-align: center;
                `}
              >
                OR
              </Heading>
            </FormRowVertical>
            <FormRowVertical>
              <Button size="large" onClick={() => setOpenSignUp(!openSignup)}>
                {"Sign Up"}
              </Button>
            </FormRowVertical>
          </StyledDiv>
        </Form>
      ) : (
        <SignupForm openSignup={openSignup} setOpenSignUp={setOpenSignUp} />
      )}
    </LoginLayout>
  );
}

export default LoginForm;
