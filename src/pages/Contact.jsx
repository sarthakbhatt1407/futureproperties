import React from "react";
import ContactsUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ReadyToLaunch from "../components/ReadyToLaunch";
import PcNav from "../components/PcNav";
import styled from "styled-components";
import MobileBottomNavigation from "../components/MobileBottomNavigation";

const MainBox = styled.div`
  position: relative;
  height: 100svh;
`;
const ContentBox = styled.div`
  height: 100svh;
  overflow: scroll;
  h1 {
    text-align: center;
  }

  @media only screen and (min-width: 0px) and (max-width: 700px) {
    height: 91.5svh;
  }
`;

const Contact = () => {
  return (
    <MainBox>
      <ContentBox>
        <PcNav show={true} />
        <h1>Contact Us</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.429912516304!2d78.03644847514431!3d30.28182050728562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909296ad57d82ed%3A0x13e28e7296aeeb27!2sFuture%20Properties!5e0!3m2!1sen!2sin!4v1725692229234!5m2!1sen!2sin"
            width="90%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            frameBorder={"none"}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <ContactsUs />
        <ReadyToLaunch />
        <Footer />
      </ContentBox>
      <MobileBottomNavigation />
    </MainBox>
  );
};

export default Contact;
