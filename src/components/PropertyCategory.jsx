import React from "react";
import { CiShop } from "react-icons/ci";
import {
  FaBuilding,
  FaCampground,
  FaHome,
  FaHotel,
  FaWarehouse,
} from "react-icons/fa";
import { FaHouseChimneyWindow, FaHouseTsunami } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdFactory } from "react-icons/md";
import { TbBuildingFactory } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  padding: 1rem 0;
  h2 {
    font-size: 1.8rem;
    width: 80%;
    margin: 0.5rem auto;

    text-align: start;
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
  display: grid;
  padding: 1rem 0;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 80%;
  margin: auto;
  a {
    text-decoration: none;
    color: black;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    width: 95%;
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
    width: 9rem;
    height: 9rem;
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
      label: "Farmhouse",
      icon: <GiFamilyHouse />,
    },
    {
      label: "Office",
      icon: <HiOutlineBuildingOffice2 />,
    },
    {
      label: "Factory",
      icon: <MdFactory />,
    },
    {
      label: "Manufacturing",
      icon: <TbBuildingFactory />,
    },
    {
      label: "Hotel/Resort",
      icon: <FaHotel />,
    },
    {
      label: "Guest House",
      icon: <FaHouseChimneyWindow />,
    },
    {
      label: "Warehouse",
      icon: <FaWarehouse />,
    },
    {
      label: "Cold-Storage",
      icon: <FaHouseTsunami />,
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
