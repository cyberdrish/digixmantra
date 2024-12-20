import styled from "styled-components";
import useLogout from "../features/authentication/useLogout";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";
const StyleDiv = styled.div`
  display: block;
  gap: 1rem; /* Adjusts spacing between Header text and Logout button */
  align-items: right;
  padding: 1rem 1rem;
`;
function Logout() {
  const { logout, isLoading: isLoggingOut } = useLogout();

  return (
    <StyleDiv>
      <Button size="small" $variation="primary" onClick={logout}>
        {!isLoggingOut ? "Logout" : <SpinnerMini />}
      </Button>
    </StyleDiv>
  );
}

export default Logout;
