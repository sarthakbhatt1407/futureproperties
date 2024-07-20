import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import PropertyCategory from "../components/PropertyCategory";
import OurWork from "../components/OurWork";
import ContactsUs from "../components/ContactUs";
import Footer from "../components/Footer";

const MainBox = styled.div`
  position: relative;
  height: 100svh;
`;
const ContentBox = styled.div`
  height: 100svh;
  overflow: scroll;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    height: 91.5svh;
  }
`;

const Home = () => {
  return (
    <MainBox>
      <ContentBox>
        <Header />
        <PropertyCategory />
        <OurWork />
        <ContactsUs />
        <Footer />
      </ContentBox>
      <MobileNav />
    </MainBox>
  );
};

export default Home;
