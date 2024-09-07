import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import Property from "./pages/Property";
import Login from "./pages/Login";
import AllProperties from "./pages/AllProperties";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import AllNews from "./pages/AllNews";
import NewsDetail from "./pages/NewsDetail";

const MainDiv = styled.div`
  max-height: 100svh;
`;

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 650,
    });

    return () => {
      // clearInterval(aosRefresh);
    };
  }, []);

  return (
    <MainDiv>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Profile />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/property" element={<Property />} />
        <Route path="/properties" element={<AllProperties />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/news/1" element={<NewsDetail />} />
      </Routes>
    </MainDiv>
  );
};

export default App;
