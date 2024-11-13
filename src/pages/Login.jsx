import styled, { css } from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "main other";
  height: 100vh;
`;

const Img = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  background-color: var(--color-grey-900);
`;
const Main = styled.div`
  grid-area: main;
`;

const StyledDiv = styled.div`
  padding: 10%;
`;

function Login() {
  const navigate = useNavigate();
  return (
    <LoginLayout>
      <Main>
        <Img src="/Login-Gif.png" alt="LogIn page" />
      </Main>
      <StyledDiv>
        <h1>Sign in</h1>
        <h3 style={{ "margin-top": "4rem" }}>Email</h3>
        <input placeholder="xyz@xyzMail.com" style={{ width: "100%" }}></input>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            "margin-top": "4rem",
          }}
        >
          <h3>Password</h3>{" "}
          <h5 style={{ color: "#FF9E62" }}>Forgot password ?</h5>
        </div>
        <input placeholder="xyz@xyzMail.com" style={{ width: "100%" }}></input>
        <Button
          size="medium"
          customStyles={css`
            width: 100%;
            margin-top: 2rem;
          `}
          onClick={() => navigate("/homepage")}
        >
          Sign in
        </Button>
      </StyledDiv>
    </LoginLayout>
  );
}

export default Login;
