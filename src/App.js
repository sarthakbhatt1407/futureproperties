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
import { useDispatch, useSelector } from "react-redux";
import Error from "./pages/Error";
import Queries from "./pages/Queries";
import AdminPanel from "./pages/AdminPanel";
import PostProperty from "./pages/PostProperty";
import AboutUs from "./pages/AboutUs";

const MainDiv = styled.div`
  max-height: 100svh;
`;

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    const localStr = JSON.parse(localStorage.getItem("state"));

    if (localStr) {
      dispatch({ type: "reload", data: { ...localStr } });
    }
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
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {isLoggedIn && <Route path="/login" element={<Home />} />}
        {isLoggedIn && (
          <Route path="/post-property" element={<PostProperty />} />
        )}
        <Route path="/" element={<Home />} />

        <Route path="/property/:title/:id" element={<Property />} />
        <Route path="/properties" element={<AllProperties />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/admin-panel/:page" exact element={<AdminPanel />} />
        <Route path="/admin-panel/:page/:id" exact element={<AdminPanel />} />
        {isLoggedIn && (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/queries" element={<Queries />} />
          </>
        )}
        {!isLoggedIn && (
          <>
            <Route path="/profile" element={<Login />} />
          </>
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </MainDiv>
  );
};

export default App;
