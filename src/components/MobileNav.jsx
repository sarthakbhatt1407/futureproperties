import {
  AccountCircleOutlined,
  BookmarkBorderOutlined,
  ControlPointOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { useLocation } from "react-router";

const MainDiv = styled.div`
  width: 100%;
  height: 7.5vh;
  background-color: #ffffff;
  padding: 0 0 0.3rem 0;
  position: absolute;
  bottom: 0;
  box-shadow: 0.2rem 0.2rem 0.6rem #646464;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  left: 0;
  display: flex;
  justify-content: space-around;
  @media only screen and (min-width: 700px) and (max-width: 5000px) {
    display: none;
  }
`;
const LinkDiv = styled.div`
  display: flex;
  text-transform: capitalize;
  flex-direction: column;
  padding: 0 0.7rem;
  padding-top: 0.2rem;
  align-items: center;
  justify-content: center;
  svg {
    color: #676767;
    transform: scale(1.1);
  }
`;

const MobileNav = () => {
  const [active, setActive] = useState("");
  const path = useLocation().pathname;
  useEffect(() => {
    setActive(path);
    return () => {};
  }, [path]);

  return (
    <MainDiv>
      <LinkDiv className={active === "/" ? "activeNav" : ""}>
        <HomeOutlined />
        Home
      </LinkDiv>
      <LinkDiv>
        <ApartmentOutlinedIcon />
        properties
      </LinkDiv>
      <LinkDiv>
        <ControlPointOutlined
          style={{
            color: "#3F7BFF",
            transform: "translateY(-1px) scale(1.4)",
          }}
        />
        Sell
      </LinkDiv>
      <LinkDiv>
        <BookmarkBorderOutlined />
        Saved
      </LinkDiv>
      <LinkDiv>
        <AccountCircleOutlined />
        Profile
      </LinkDiv>
    </MainDiv>
  );
};

export default MobileNav;
