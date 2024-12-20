import styled, { css } from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 15rem;
  width: auto;

  ${(props) =>
    props.type === "large" &&
    css`
      height: 25rem;
    `}

  ${(props) =>
    props.$renderedAt === "sideBar" &&
    css`
      @media (max-width: 768px) {
        height: 10rem;
        width: auto;
      }
    `}

  ${(props) =>
    props.$renderedAt === "Login" &&
    css`
      @media (max-width: 768px) {
        height: 20rem;
        width: auto;
      }
    `}
`;

function Logo({ type, renderedAt }) {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/DigiXMantra-Dark.png" : "/DigiXMantra-Light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" type={type} $renderedAt={renderedAt} />
    </StyledLogo>
  );
}

export default Logo;
