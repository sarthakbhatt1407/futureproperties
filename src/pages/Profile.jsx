import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Footer from "../components/Footer";
import {
  AccountCircle,
  LocalShipping,
  LocationOn,
  Settings,
} from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import PcNav from "../components/PcNav";

const OuterBox = styled.div`
  width: 100%;
  margin: auto;
  height: fit-content;
  background-color: #f7f7f7;
  padding: 2rem;
  @media only screen and (max-width: 1099px) {
    padding: 0;
  }
`;
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: auto;
  p {
    margin-top: 1rem;
    text-transform: capitalize;
    color: #777;
    font-size: 1.2rem;

    span {
      color: #3f7bff;
    }
  }
  h1 {
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: black;
  }
  @media only screen and (max-width: 1099px) {
    width: 90%;
    margin: auto;
    padding: 0;
    gap: 0;
    p {
      font-size: 0.9rem;
    }
    h1 {
      margin-top: 0;
      font-size: 2.4rem;
    }
  }
`;
const LinksAndDetailsBox = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 2fr; */
  display: flex;
  gap: 2rem;
  @media only screen and (max-width: 1099px) {
    flex-direction: column;
  }
`;
const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: start;
  background-color: white;
  button {
    width: 20rem;
    padding: 2rem 1rem;
    background-color: white;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 1.2rem;
    gap: 1rem;
    border: none;
    transition: all 1s;
    svg {
      transform: scale(1.5);
    }
    &:hover {
      background-color: #dcdcdc;
    }
    @media only screen and (max-width: 1099px) {
      width: 100%;
      font-size: 1rem;
      padding: 1.5rem 1rem;
      justify-content: center;

      svg {
        transform: scale(1.2);
      }
    }
  }
  @media only screen and (max-width: 1099px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* gap: 1rem; */
    width: 100%;
  }
`;

const DetailsBox = styled.div`
  width: 70%;
  box-shadow: 0.2rem 0.2rem 1rem #d5d5d5;
  border-radius: 0.8rem;
  padding: 2rem;
  background-color: white;
  height: 100%;
  @media only screen and (max-width: 1099px) {
    padding: 2rem;
    width: 83%;
    margin: auto;
  }
`;

const Profile = () => {
  const [currentActive, setCurrentActive] = useState("mydetails");

  const userId = useParams().userId;
  const navigate = useNavigate();

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    return () => {};
  }, [userId]);

  const activeHandler = (e) => {
    setCurrentActive(e.target.id);
  };

  const iconHandler = (e) => {
    setCurrentActive(e.target.parentElement.id);
  };

  return (
    <>
      <PcNav show={true} />
      <OuterBox>
        <MainBox>
          <p>
            Home / <span>My Account</span>
          </p>
          <h1>My Account</h1>

          <LinksAndDetailsBox>
            <LinksBox>
              {currentActive === "mydetails" && (
                <button
                  style={{ backgroundColor: "#eeeeee", color: "#3F7BFF" }}
                  id="mydetails"
                  onClick={activeHandler}
                >
                  <AccountCircle onClick={iconHandler} /> My details
                </button>
              )}
              {!(currentActive === "mydetails") && (
                <button id="mydetails" onClick={activeHandler}>
                  <AccountCircle onClick={iconHandler} /> My details
                </button>
              )}
              {currentActive === "myproperties" && (
                <button
                  style={{ backgroundColor: "#eeeeee", color: "#3F7BFF" }}
                  onClick={activeHandler}
                  id="myproperties"
                >
                  <LocationOn onClick={iconHandler} /> Properties
                </button>
              )}
              {!(currentActive === "myproperties") && (
                <button onClick={activeHandler} id="myproperties">
                  <LocationOn onClick={iconHandler} /> Properties
                </button>
              )}
            </LinksBox>
            <DetailsBox></DetailsBox>
          </LinksAndDetailsBox>
        </MainBox>
      </OuterBox>
      <Footer />
    </>
  );
};

export default Profile;
