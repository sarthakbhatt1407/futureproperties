import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import PropertyCategory from "../components/PropertyCategory";
import OurWork from "../components/OurWork";
import ContactsUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Trending from "../components/Trending";
import MostViewed from "../components/MostViewed";
import News from "../components/News";
import Videos from "../components/Videos";
import Slideshow from "../components/Slideshow";
import Handpicked from "../components/Handpicked";
import MobileBottomNavigation from "../components/MobileBottomNavigation";
import ReadyToLaunch from "../components/ReadyToLaunch";
import PcNav from "../components/PcNav";
import Rental from "../components/Rental";

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
  const images = [
    {
      url: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      url: "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      url: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      url: "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      url: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      url: "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
  ];
  return (
    <MainBox>
      <ContentBox>
        <PcNav show={true} clr={"#EFEFEE"} />
        <Header />
        {/* <PropertyCategory /> */}
        <Trending />
        <Handpicked />
        <MostViewed />
        {/* <Rental /> */}

        <News />
        <Videos />
        <OurWork />
        <ContactsUs />
        <ReadyToLaunch />
        <Footer />
      </ContentBox>
      <MobileBottomNavigation view={0} />
      {/* <MobileNav /> */}
    </MainBox>
  );
};

export default Home;
