import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import React from "react";
import styled from "styled-components";
import {
  HiOutlineHandThumbUp,
  HiOutlineChatBubbleBottomCenterText,
  HiLink,
  HiOutlineShare,
} from "react-icons/hi2";

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 1rem;
  gap: none;
  min-width: 10rem;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  background-color: var(--color-grey-0);
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensures content inside MainContent doesn't overflow */
  height: 70%;
  box-sizing: border-box;
  min-width: 30rem;
  min-height: 30rem;
  @media (max-width: 768px) {
    min-height: 40rem;
  }
`;

const PublishToSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CaptionSection = styled.div`
  background-color: var(--color-grey-50);
  border-radius: 8px;
`;

const Styleddiv1 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  overflow: hidden; /* Enables scrolling within Styleddiv2 if necessary */
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 5%;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--color-grey-200);
  margin-top: auto;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  ${(props) =>
    props.primary
      ? "background-color: var(--color-brand-600); color: var(--color-grey-0);"
      : "background-color: transparent; color:  var(--color-brand-600);"}
`;
const StyledDiv = styled.div`
  padding-top: 2rem;
`;
const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 10rem;
  max-height: 100%;
  max-width: 100%;
  margin: 1px;
  box-sizing: border-box;
  border: 2px solid var(--color-grey-200);
  border-radius: 4px;
  background-color: var(--color-grey-0);
  font-size: 12px;
  resize: none;
  overflow: hidden;
`;
const DisplayContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-grey-0);
  padding: 10%;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden; /* Prevents any overflow from DisplayContent */
`;
const Styleddiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid var(--color-grey-200);
  border-radius: 8px;
  height: 100%;
  overflow-y: auto; /* Enables scrolling within Styleddiv2 if necessary */
`;
const UserContainer = styled.div`
  display: flex;
`;

const ImgUser = styled.img`
  height: 5rem;
  width: auto;
  border-radius: 50%;
  margin: 1rem;

  /* @media (max-width: 768px) {
    height: 10rem;
    width: auto;
  } */
`;
const ImgPost = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImgPostDiv = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
function CreatePostForm() {
  return (
    <LayoutWrapper>
      <MainContent>
        <Styleddiv1>
          <PublishToSection>
            <h3>Publish to</h3>
            <select>
              <option>Select a social account (required)</option>
              {/* Add more options here */}
            </select>
            <StyledDiv>
              <h4>Recently used:</h4>
              <div>
                {/* Display recently used accounts as Styledbuttons */}
                <StyledButton>Account 1</StyledButton>
                <StyledButton>Account 2</StyledButton>
                {/* More Styledbuttons */}
              </div>
            </StyledDiv>
          </PublishToSection>

          <CaptionSection>
            <h3>Your post</h3>
            <StyledTextarea placeholder="Write your caption, then customize it for each social network"></StyledTextarea>
            <div>0</div>
            {/* Icons for enhancing, emoji, etc. */}
          </CaptionSection>

          <Footer>
            <StyledButton>Save as draft</StyledButton>
            <StyledButton primary="true">Post now</StyledButton>
          </Footer>
        </Styleddiv1>
      </MainContent>

      <MainContent>
        <DisplayContent>
          <Styleddiv2>
            <UserContainer>
              <ImgUser src="/Sample-Account-pic.png" alt="Profile Pic" />
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  fontSize: "small",
                }}
              >
                Your account
                <label style={{ color: "grey" }}> Today</label>
              </label>
            </UserContainer>
            <p
              style={{
                margin: "0px 2rem 0px 2rem",
                fontSize: "small",
              }}
            >
              Write your caption, then customize it for each social network
            </p>
            <ImgPostDiv>
              <ImgPost src="Sample-post-pic.png" alt="post pic" />
            </ImgPostDiv>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <button
                style={{
                  fontSize: "150%",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <HiOutlineHandThumbUp />
              </button>
              <button
                style={{
                  fontSize: "150%",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <HiLink />
              </button>
              <button
                style={{
                  fontSize: "150%",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <HiOutlineShare />
              </button>
              <button
                style={{
                  fontSize: "150%",
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <HiOutlineChatBubbleBottomCenterText />
              </button>
            </div>
          </Styleddiv2>
        </DisplayContent>
      </MainContent>
    </LayoutWrapper>
  );
}

export default CreatePostForm;
