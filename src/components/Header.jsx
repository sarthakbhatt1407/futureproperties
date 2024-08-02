import React, { useEffect, useState } from "react";
import PcNav from "./PcNav";
import styled from "styled-components";
import logo from "../assets/logo.png";
import intro from "../assets/intro.jpg";
import home from "../assets/side-city-1.png";
import { AutoComplete } from "antd";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const MainBox = styled.div`
  background-color: #efefee;
  height: 90svh;
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
  p {
    font-size: 0.9rem;
    width: 100%;
    margin: -0.1rem auto;
    display: flex;
    gap: 0.6rem;
    align-items: center;

    span {
      background-color: white;
      padding: 0.1rem 0.5rem;
      color: black;
      text-transform: uppercase;
      font-weight: 450;
    }
  }
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
  overflow: hidden;
  height: 85%;

  /* background-color: red; */
  padding: 0 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 29;
  div {
    display: flex;
    flex-direction: column;

    p {
      font-size: 0.9rem;
      width: 100%;
      margin: 0.7rem auto;
      display: flex;
      gap: 0.4rem;
      align-items: center;

      span {
        background-color: white;
        padding: 0.1rem 0.3rem;
        color: black;
        text-transform: uppercase;
        font-weight: 450;
      }
    }
    h1 {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      font-size: 1.8rem;
      margin-top: 0;
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
      width: 15rem;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 701px) and (max-width: 5000px) {
    display: none;
  }
`;
const TextBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  img {
    margin: auto -0.3rem;
    width: 12%;
  }
  span {
    margin-bottom: 0.5rem;
    font-size: 1.15rem;
    letter-spacing: 0.08rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
const OwnerBox = styled.div`
  position: absolute;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0%;
  background-color: #2566f1;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 0.3rem 0;
  display: none;
  span {
    display: flex;
    gap: 0.5rem;
    color: #ecebeb;
    a {
      color: white;
      letter-spacing: 0.06rem;
      display: flex;
      align-items: center;
      svg {
        color: white;
        transform: scale(0.7);
      }
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: flex;
    left: 10%;
    width: 80%;
  }
`;

const SelectionBox = styled.div`
  display: flex;

  div {
    div {
      span:not(:first-child) {
        @media only screen and (min-width: 0px) and (max-width: 700px) {
          display: grid;
          position: absolute;
          top: 50%;
          left: 3%;
          transform: translate(0%, -50%);
        }
      }
    }
  }
`;

const Header = () => {
  const [p, setP] = useState("Dehradun");
  const options = [
    {
      value: "Dehradun",
    },
    {
      value: "Rishikesh ",
    },
    {
      value: "Haridwar",
    },
  ];
  let c = 1;

  useEffect(() => {
    const intv = setInterval(() => {
      if (c == 3) {
        c = 0;
      }
      setP(options[c].value);
      c++;
    }, 2000);
    return () => {
      clearInterval(intv);
    };
  }, []);

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
            <InpBox>
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
                placeholder="Search City"
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
            <p>
              Popular Searches : <span>Dehradun</span> <span>Haridwar</span>{" "}
              <span>Rishikesh</span>
            </p>
          </InpTextBox>
          <img src={home} alt="" data-aos="fade-left" />
        </InpImgBox>
      </SearchBox>
      <MobileSearchBox>
        <TextBox>
          <img src={logo} alt="" />
          <span>Future properties</span>
        </TextBox>
        <SelectionBox>
          <h1 data-aos="zoom-in">
            <span>find your dream house</span>
          </h1>

          <AutoComplete
            style={{
              width: "100%",
              height: 45,
            }}
            placeholder={`Search by city - ${p}`}
            onSelect={(e) => {
              console.log(e);
            }}
            options={options}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
          <p>
            Popular Searches : <span>Dehradun</span> <span>Haridwar</span>{" "}
            <span>Rishikesh</span>
          </p>
          <button data-aos="zoom-in">Search</button>
          {/* <img data-aos="zoom-in" src={home} alt="" /> */}
        </SelectionBox>
      </MobileSearchBox>
      <OwnerBox>
        <span>
          Are you a Owner?{" "}
          <Link>
            Post property for free <FaChevronRight />
          </Link>
        </span>
      </OwnerBox>
    </MainBox>
  );
};

export default Header;
