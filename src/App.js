import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import Property from "./pages/Property";
import Login from "./pages/Login";
import AllProperties from "./pages/AllProperties";

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
        <Route path="/login" element={<Login />} />
        <Route path="/property" element={<Property />} />
        <Route path="/properties" element={<AllProperties />} />
      </Routes>
    </MainDiv>
  );
};

export default App;
