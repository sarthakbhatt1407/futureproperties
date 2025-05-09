import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const MainDiv = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 0.7rem;
  display: grid;
  overflow-x: hidden;
  grid-template-columns: 0.7fr 1fr;
  height: fit-content;
  background-color: #fff8e2;

  @media only screen and (min-width: 0px) and (max-width: 800px) {
    width: 90%;
    grid-template-columns: 1fr;
    height: fit-content;
    padding: 1rem 0;
  }
`;
const LeftDiv = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  h2 {
    font-size: 2.2rem;
    margin: 0;
  }
  p {
    font-size: 1.1rem;
    color: #5c5c5c;
    width: 90%;
    margin: 0;
  }
  @media only screen and (min-width: 0px) and (max-width: 800px) {
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    h2 {
      font-size: 2rem;
    }
    p {
      width: 100%;
      text-align: center;
      color: #393939;
      font-size: 1rem;
    }
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  img {
    width: 15rem;
  }
`;

const BtnBox = styled.div`
  button {
    font-weight: bold;
    border: 2px solid #828181;
    background-color: transparent;

    color: black;
    overflow: hidden;
    padding: 0.7rem 2rem;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-size: 0.9rem;
    &::after {
      background-color: #3f7bfe;

      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(-100%, 0) rotate(10deg);
      transform-origin: top left;
      transition: 0.2s transform ease-out;
      will-change: transform;
      z-index: -1;
    }
    &:hover::after {
      transform: translate(0, 0);
    }
    &:hover {
      border: 2px solid transparent;
      color: white;
      transform: scale(1.05);
      font-weight: 500;
      will-change: transform;
    }
    @media only screen and (min-width: 0px) and (max-width: 549px) {
      margin: 0;
    }
  }
`;
const ReadyToLaunch = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <MainDiv>
      <RightDiv>
        <img src={logo} alt="" />
      </RightDiv>
      <LeftDiv>
        <h2>Post Property</h2>
        <p>
          Post your property with ease and reach verified buyers across
          Uttarakhand. It’s quick, secure, and absolutely free!
        </p>
        <BtnBox>
          {!isLoggedIn ? (
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/post-property");
              }}
            >
              Post Property
            </button>
          )}
        </BtnBox>
      </LeftDiv>
    </MainDiv>
  );
};

export default ReadyToLaunch;
