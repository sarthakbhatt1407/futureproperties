import React from "react";
import PcNav from "./PcNav";
import styled from "styled-components";
import favicon from "../assets/favicon.ico";
import intro from "../assets/intro.jpg";
import home from "../assets/side-city-1.png";
import { AutoComplete } from "antd";
import { Search } from "@mui/icons-material";

const MainBox = styled.div`
  background-color: #efefee;
  height: 100svh;
  position: relative;

  &::before {
    position: absolute;
    background: url(${intro});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    content: "";
    opacity: 0.1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media only screen and (min-width: 0px) and (max-width: 700px) {
      background-size: cover;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    height: 65svh;
  }
`;
const SearchBox = styled.div`
  height: 92%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  position: relative;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: none;
  }
`;
const InpTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h1 {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 3.1rem;
    margin: 0;
    font-weight: 700;
  }

  @media only screen and (min-width: 0px) and (max-width: 700px) {
    height: 92svh;
  }
`;
const InpImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: fit-content;
  img {
    width: 70%;
  }
`;

const InpBox = styled.div`
  width: fit-content;
  background-color: transparent;
  display: flex;
  gap: 0.2rem;
  border-radius: 0.4rem;
  button {
    border: none;
    border-radius: 0.7rem;
    background-color: #3f7bff;
    color: white;
    padding: 0.2rem 1rem;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    align-items: center;
  }
`;

const MobileSearchBox = styled.div`
  overflow-x: hidden;
  height: 100%;
  padding: 0 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 29;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    h1 {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      font-size: 1.8rem;
      margin: 0;
      font-weight: 700;
    }
    button {
      width: 40%;
      border-radius: 0.4rem;
      margin: auto;
      padding: 0.7rem 1rem;
      background-color: #3f7bff;
      color: white;
      font-size: 1rem;
      font-weight: 500;
      border: none;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-weight: 500;
        font-size: 1.1rem;
      }
      img {
        width: 4rem;
        margin: 0;
      }
    }
    img {
      width: 12rem;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 701px) and (max-width: 5000px) {
    display: none;
  }
`;

const Header = () => {
  const options = [
    {
      value: "Dehradun - 248001",
    },
    {
      value: "Rishikesh - 249201",
    },
    {
      value: "Haridwar - 249110",
    },
  ];
  return (
    <MainBox>
      <PcNav />
      <SearchBox>
        <InpImgBox>
          <InpTextBox data-aos="fade-right">
            <h1>
              <span>find your dream house</span>
              <span>in your city</span>
            </h1>
            <InpBox className="lll">
              <AutoComplete
                style={{
                  width: "38rem",
                  height: "3rem",
                  border: "none",
                }}
                options={options}
                onSelect={(e) => {
                  console.log(e);
                }}
                placeholder="Search City or Pincode "
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
              <button>
                <Search />
              </button>
            </InpBox>
          </InpTextBox>
          <img src={home} alt="" data-aos="fade-left" />
        </InpImgBox>
      </SearchBox>
      <MobileSearchBox>
        <div>
          <span>
            <img data-aos="fade-right" src={favicon} alt="" />
            <span data-aos="fade-left">Future Properties</span>
          </span>
          <h1 data-aos="zoom-in">
            <span>find your dream house</span>
          </h1>
          <img data-aos="zoom-in" src={home} alt="" />
          <AutoComplete
            style={{
              width: "100%",
              height: 35,
            }}
            onSelect={(e) => {
              console.log(e);
            }}
            options={options}
            placeholder="try to type `b`"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
          <button data-aos="zoom-in">Search</button>
        </div>
      </MobileSearchBox>
    </MainBox>
  );
};

export default Header;
