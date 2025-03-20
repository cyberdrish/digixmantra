import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome, HiOutlinePencil } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 400;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    /* Adjust font size on smaller screens */
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 1rem; /* Reduced padding for slim view */
      justify-content: center;
      flex-direction: column; /* Stack icon and text vertically */
      gap: 0.4rem; /* Adjust spacing between icon and text */
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <ul>
        <NavList>
          <li>
            <StyledNavLink to="/dashboard">
              <HiOutlineHome />
              <span>Home</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/CreatePostForm">
              <HiOutlinePencil />

              <span>Create Post</span>
            </StyledNavLink>
          </li>
        </NavList>
      </ul>
    </nav>
  );
}

export default MainNav;
