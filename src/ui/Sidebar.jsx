import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  width: 24rem; /* Slim sidebar width */
  /* Full sidebar width on larger screens */
  @media (max-width: 1024px) {
    width: 22rem;

    @media (max-width: 768px) {
      left: 0;
      top: 0;
      bottom: 0;
      width: auto; /* Slim width for the sidebar */
      z-index: 1000; /* Ensure it stays above other content */
      padding: 2rem 0.8rem;
      overflow-y: auto; /* Allows scrolling if needed */
      grid-row: 1 / -1;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s ease;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
