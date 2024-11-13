import styled from "styled-components";

const Img = styled.img`
  height: 15rem;
  width: auto;
  @media (max-width: 768px) {
    height: 10rem;
    width: auto;
  }
`;

function Logo({ type }) {
  return (
    <div>
      <Img src="/DigiXMantra-Light.png" alt="Logo" />
    </div>
  );
}

export default Logo;
