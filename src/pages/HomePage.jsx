import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  height: 13rem;
  width: auto;
  @media (max-width: 768px) {
    height: 10rem;
    width: auto;
  }
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 5rem;
  overflow-x: auto; /* Enables local horizontal scrolling */
  padding: 1rem auto;
  max-width: 100%; /* Ensures it doesn’t exceed the width of HomePage */
  justify-content: left;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem; /* Reduced padding for slim view */
    justify-content: center;
    flex-direction: column; /* Stack icon and text vertically */
    gap: 0.4rem; /* Adjust spacing between icon and text */
  }
`;
const StyleButton = styled.button`
  border: none;
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-width: 19rem; /* Ensures each button takes enough space */
  &:focus {
    outline: none; /* Removes the outline on click and focus */
    border: none; /* Removes the border on click and focus */
    box-shadow: none; /* Ensures no shadow appears */
  }
`;
function HomePage() {
  const navigate = useNavigate();
  return (
    <StyledDiv2>
      <StyledDiv>
        <StyleButton onClick={() => navigate("/CreatePostForm")}>
          <span>Create from scratch</span>
          <Img src="/Create-from-scratch1.png" alt="Logo" />
        </StyleButton>

        <StyleButton>
          <span>Post Everywhere</span>
          <Img src="/Post-across-networks1.png" alt="Logo" />
        </StyleButton>

        <StyleButton>
          <span>Post whats trending</span>
          <Img src="/Post-whats-trending1.png" alt="Logo" />
        </StyleButton>

        <StyleButton>
          <span>Start which AI</span>
          <Img src="/Start-with-AI1.png" alt="Logo" />
        </StyleButton>
      </StyledDiv>
    </StyledDiv2>
  );
}

export default HomePage;
