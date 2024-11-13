import styled from "styled-components";
import Header from "../ui/Header";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "header "
    "main ";

  /* @media (max-width: 768px) {
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        grid-template-areas:
        "header header"
        "sidebar main";
        width: auto;
        }
        @media (max-width: 1024px) {
            grid-template-columns: auto 1fr;
            } */
`;

const Main = styled.main`
  grid-area: main;
  background-color: var(--color-grey-0);
  padding: 2rem 4.8rem 6.4rem;
  max-width: 100%;
  overflow-y: auto;
  height: 100vh;
  justify-content: center;
`;

const StyleContainer1 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 0rem 10% 0rem 10%;

  @media (min-width: 1024px) {
    padding: 0rem 15% 0rem 15%;
  }
`;
const StyleDiv1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  max-width: 100%;
  gap: 1rem;

  @media (max-width: 1064px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

function Home() {
  const navigate = useNavigate();
  return (
    <StyledAppLayout>
      <Main>
        <StyleContainer1>
          <img src="/HomepageLanding-pic1.png" alt="HomeImage" />
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span style={{ wordwrap: "normal" }}>
              Save time and get REAL results on social media.<br></br>
            </span>
            <span style={{ color: "#FF9E62" }}>DigiXmantra makes it easy.</span>
            <Button onClick={() => navigate("/login")}>
              Start your Journey Today!!
            </Button>
          </h1>
        </StyleContainer1>
        <StyleContainer1>
          <CenteredContent>
            <h1>
              <span>
                What can Digi<span style={{ fontStyle: "italic" }}>X </span>
                Mantra do for you?
              </span>
            </h1>
          </CenteredContent>
        </StyleContainer1>
        <StyleDiv1>
          <CenteredContent>
            <h1 style={{ color: "#007978", fontSize: "600%" }}>+636%</h1>
            <h4>increase in reach, year over year</h4>
          </CenteredContent>

          <CenteredContent>
            <h1 style={{ color: "#007978", fontSize: "600%" }}>+500%</h1>
            <h4>grow across all social channels</h4>
          </CenteredContent>

          <CenteredContent>
            <h1 style={{ color: "#007978", fontSize: "600%" }}>+250%</h1>
            <h4>increase in sourced revenue, year over year</h4>
          </CenteredContent>
        </StyleDiv1>
      </Main>
      <Header type="Homepage_Landing">HomeLanding</Header>
    </StyledAppLayout>
  );
}

export default Home;
