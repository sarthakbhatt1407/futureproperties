import React from "react";
import { CiShop } from "react-icons/ci";
import { FaBuilding, FaCampground, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  padding: 1rem 0;
  h2 {
    font-size: 1.8rem;
    width: 80%;
    margin: 0.5rem auto;

    text-align: center;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    h2 {
      text-align: center;
      font-size: 1.5rem;
      width: 100%;
    }
  }
`;

const AllCategoryBox = styled.div`
  display: flex;
  padding: 1rem 0;
  gap: 1rem;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: auto;
  a {
    text-decoration: none;
    color: black;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    width: 90%;
  }
`;

const CatgeoryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  box-shadow: 0.2rem 0.2rem 0.6rem #e0e0e0;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 10rem;
  height: 10rem;
  align-items: center;
  gap: 0.5rem;
  p {
    margin: 0;
    font-size: 1.1rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    width: 36vw;
    height: 9rem;
    text-align: center;
    p {
      font-size: 1rem;
    }
  }
`;

const IconBox = styled.div`
  background-color: #e9f3ff;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #074da3;
    transform: scale(2);
  }
`;

const PropertyCategory = () => {
  const categories = [
    {
      label: "Independent House/Villa",
      icon: <FaHome />,
    },
    {
      label: "Flat/Appartment",
      icon: <FaBuilding />,
    },
    {
      label: "Plot/Land",
      icon: <FaCampground />,
    },

    {
      label: "Shop",
      icon: <CiShop />,
    },
  ];

  return (
    <MainDiv>
      <h2>Choose Property Type</h2>
      <AllCategoryBox>
        {categories.map((c) => {
          return (
            <Link>
              <CatgeoryBox key={c.icon}>
                <IconBox>{c.icon}</IconBox>
                <p>{c.label}</p>
              </CatgeoryBox>
            </Link>
          );
        })}
      </AllCategoryBox>
    </MainDiv>
  );
};

export default PropertyCategory;
