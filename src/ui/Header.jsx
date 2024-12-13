import styled, { css } from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-300);
  justify-content: space-between;
`;
const StyleDiv = styled.div`
  display: block;
  gap: 1rem; /* Adjusts spacing between Header text and Logout button */
  align-items: right;
  padding: 1rem 1rem;
`;

function Header({ type }) {
  console.log({ type });
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  return (
    <StyledHeader>
      {type === "Homepage_Landing" ? (
        <>
          <img
            style={{ height: "5rem", margin: "9px 0px 0px 9px" }}
            src="/DigiXMantra-Light-small.png"
            alt="Logo"
          />
          <StyleDiv>
            <Button
              size="small"
              variation="primary"
              onClick={() => navigate("/login")}
            >
              LogIn
            </Button>
          </StyleDiv>
        </>
      ) : (
        <>
          <StyleDiv className="background-color: black;">Welcome User</StyleDiv>
          <StyleDiv>
            <Button
              size="small"
              variation="primary"
              onClick={() => navigate("/")}
            >
              Logout
            </Button>
          </StyleDiv>
        </>
      )}
    </StyledHeader>
  );
}

export default Header;
