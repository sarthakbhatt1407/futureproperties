import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const MainBox = styled.div`
  position: relative;
  height: 100svh;
`;
const ContentBox = styled.div`
  overflow: scroll;
  height: 92.5svh;
`;

const MobileNav = styled.div`
  width: 100%;
  height: 7.5vh;
  position: absolute;
  bottom: 0;
  background-color: #85a9f6;
  left: 0;
  @media only screen and (min-width: 700px) and (max-width: 5000px) {
    display: none;
  }
`;

const Home = () => {
  return (
    <MainBox>
      <ContentBox>
        <Header />
      </ContentBox>
      <MobileNav>hiii</MobileNav>
    </MainBox>
  );
};

export default Home;
