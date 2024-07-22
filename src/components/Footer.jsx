import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocationCity,
  Mail,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid #e7e7e7;
  grid-gap: 1rem;
  background-color: #fdfdfd;
  margin-top: 2rem;
  @media only screen and (min-width: 351px) and (max-width: 950px) {
    margin-top: 6rem;
  }
`;

const FirstDiv = styled.div`
  /* background-color: red; */
  width: 80%;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  @media only screen and (min-width: 351px) and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

const LeftDiv = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  /* background-color: red; */
  gap: 1rem;
  width: 90%;
  img {
    width: 12rem;
    margin: auto;
  }
  div {
    display: flex;
    gap: 1.5rem;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 1rem 0.2rem;
    svg {
      transform: scale(1.7);
    }
  }
  @media only screen and (min-width: 351px) and (max-width: 950px) {
    div {
      justify-content: center;
      align-items: center;
      gap: 1.8rem;
    }
  }
`;

const MidDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2.4rem;
    text-transform: capitalize;
    @media only screen and (min-width: 0px) and (max-width: 699px) {
      font-size: 2rem;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    width: 100%;
    gap: 1rem;
    font-size: 1.3rem;

    text-transform: capitalize;
    span {
      cursor: pointer;
      transition: all 0.4s;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: #3f7bff;
        }
      }
      &:hover {
        color: #3f7bff;
        transform: scale(1.1);
      }
    }
  }
`;

// const RightDiv = styled.div``;

const SecondDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <MainDiv>
      <FirstDiv>
        <LeftDiv>
          <img src={logo} alt="" />
          <div>
            <Link>
              <FacebookOutlined
                style={{
                  color: "#3338A3",
                }}
              />
            </Link>
            <Link>
              <Instagram
                style={{
                  color: "#F77D41",
                }}
              />
            </Link>
            <Link>
              <YouTube
                style={{
                  color: "#ff0015",
                }}
              />
            </Link>
            <Link>
              <LinkedIn
                style={{
                  color: "#114B84",
                }}
              />
            </Link>
            <Link>
              <Twitter
                style={{
                  color: "#55ACEE",
                }}
              />
            </Link>
          </div>
        </LeftDiv>
        <MidDiv>
          <h2>Properties</h2>
          <div>
            <span>
              {" "}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.3rem",
                }}
              >
                Independent House/Villa
              </Link>
            </span>
            <span>
              {" "}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.3rem",
                }}
              >
                Flat/Appartment
              </Link>
            </span>

            <span>
              {" "}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.3rem",
                }}
              >
                Shop
              </Link>
            </span>
            <span>
              {" "}
              <Link
                to="/about-us"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.3rem",
                }}
              >
                Plot/Land
              </Link>
            </span>
          </div>
        </MidDiv>
        <MidDiv>
          <h2>Quick links</h2>
          <div>
            <span>
              {" "}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.3rem",
                }}
              >
                Home
              </Link>
            </span>
            <span>
              {" "}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.3rem",
                }}
              >
                Properties
              </Link>
            </span>

            <span>
              {" "}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.3rem",
                }}
              >
                Contact
              </Link>
            </span>
            <span>
              {" "}
              <Link
                to="/about-us"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "1.3rem",
                }}
              >
                About us
              </Link>
            </span>
          </div>
        </MidDiv>
      </FirstDiv>
      <SecondDiv>
        <p>Copyright © 2024 Future Properties . All rights reserved.</p>
      </SecondDiv>
    </MainDiv>
  );
};

export default Footer;
