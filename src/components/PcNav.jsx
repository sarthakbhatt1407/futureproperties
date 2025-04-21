import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo.png";
import { AccountCircle } from "@mui/icons-material";
import { IoLocationOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from "react-redux";

const MainDiv = styled.nav`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #efefee;
  z-index: 2000;
  align-items: center;
  /* padding: 0.2rem 6rem 0.2rem 0; */
  justify-content: space-around;
  width: 100%;
  margin: auto;
  border-radius: 0.4rem;
  @media only screen and (min-width: 0px) and (max-width: 699px) {
    display: none;
    padding: 0;
    width: 90%;
  }
`;
const LeftDiv = styled.div`
  display: flex;

  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  span {
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
  img {
    width: 10%;
  }
  @media only screen and (min-width: 0px) and (max-width: 699px) {
    img {
      width: 20%;
    }
    span {
      display: none;
    }
  }
`;
const RightDiv = styled.div`
  display: flex;
  gap: 2rem;
  a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-weight: 450;
  }
  @media only screen and (min-width: 0px) and (max-width: 699px) {
    a {
      font-size: 1rem;
      &:not(:last-child) {
        display: none;
      }
    }
  }
`;

const MobileNavDiv = styled.div`
  display: none;

  @media only screen and (min-width: 0px) and (max-width: 699px) {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    span {
      color: white;
      padding: 0rem 0.6rem;
      font-size: 1rem;
      font-weight: 500;
      gap: 0.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      background-color: #3f7bff;
    }
    div {
      display: flex;
      gap: 1rem;

      letter-spacing: 0.07rem;
      span:first-child {
        background-color: #dbdddc;
        color: black;
        padding: 0.1rem 0.5rem;
        font-size: 0.9rem;
        font-weight: 400;
      }
      span:not(:first-child) {
        padding: 0.5rem;
        svg {
          transform: scale(1.2);
        }
      }
    }
  }
`;

const PcNav = (props) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isAdmin = useSelector((state) => state.isAdmin);
  const city = useSelector((state) => state.city);
  const navigate = useNavigate();
  const show = props.show;
  const clr = props.clr;
  return (
    <>
      <MainDiv clr={clr}>
        <LeftDiv onClick={() => navigate("/")}>
          <img src={logo} alt="" />
          <span>future Properties</span>
        </LeftDiv>
        <RightDiv>
          <Link to={"/"}>Home</Link>
          <Link to={"/properties"}>Properties</Link>
          <Link to={"/contact-us"}>Contact</Link>
          <Link to={"/about-us"}>About Us</Link>
          {isAdmin && <Link to={"/admin-panel/properties"}>Admin Panel</Link>}
          {!isLoggedIn && (
            <Link to={"/login"}>
              <AccountCircle
                style={{ transform: "scale(1.3)", color: "#3F7BFF" }}
              />
            </Link>
          )}
          {isLoggedIn && (
            <Link to={"/profile"}>
              <AccountCircle
                style={{ transform: "scale(1.3)", color: "#3F7BFF" }}
              />
            </Link>
          )}
        </RightDiv>
      </MainDiv>
      {show && (
        <MobileNavDiv
          style={{
            backgroundColor: `${clr ? clr : "white"}`,
          }}
        >
          <span
            style={{
              textTransform: "capitalize",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <IoLocationOutline /> {city}
          </span>
          <div>
            <span
              onClick={() => {
                if (isLoggedIn) {
                  navigate("/post-property");
                } else {
                  navigate("/login");
                }
              }}
            >
              List Property
            </span>
            <span>
              {!isLoggedIn && (
                <Link
                  to={"/login"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <VscAccount />
                </Link>
              )}
              {isLoggedIn && (
                <Link
                  to={"/profile"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <VscAccount />
                </Link>
              )}
            </span>
          </div>
        </MobileNavDiv>
      )}
    </>
  );
};

export default PcNav;
