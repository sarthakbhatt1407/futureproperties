import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

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
      </Routes>
    </MainDiv>
  );
};

export default App;
