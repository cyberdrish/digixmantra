import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "sidebar main";
  height: 100vh;

  /* Responsive design for narrower screens */
  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "header header"
      "sidebar main";
    width: auto;
  }
  @media (max-width: 1024px) {
    grid-template-columns: auto 1fr;
  }
`;

const Main = styled.main`
  grid-area: main;
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  max-width: 100%;
  overflow-y: auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
