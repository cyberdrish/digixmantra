import styled, { css } from "styled-components";

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
  return (
    <StyledLogo>
      <Img
        src="/DigiXMantra-Light.png"
        alt="Logo"
        type={type}
        $renderedAt={renderedAt}
      />
    </StyledLogo>
  );
}

export default Logo;
