import styled, { css } from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 15rem;
  ${(props) =>
    props.type === "large" &&
    css`
      height: 25rem;
    `}
  width: auto;
  @media (max-width: 768px) {
    height: 10rem;
    width: auto;
  }
`;

function Logo({ type }) {
  return (
    <StyledLogo>
      <Img src="/DigiXMantra-Light.png" alt="Logo" type={type} />
    </StyledLogo>
  );
}

export default Logo;
