import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 80%;

  margin: auto;
  gap: 1rem;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    width: 90%;
    gap: 0.5rem;
  }
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 0.07rem;
    span {
      border-bottom: 2px solid #3f7bff;
    }
  }
  a {
    color: #3f7bff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.1rem;
    font-size: 1.2rem;
    svg {
      transform: scale(0.7);
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    a {
      font-size: 1.1rem;
    }
  }
`;

const PropertiesBox = styled.div`
  display: flex;
  overflow-x: scroll;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0.2rem 1rem 0.5rem;
  a {
    text-decoration: none;
    margin: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PropertyBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0.1rem 0.1rem 0.5rem #eeeded;

  border-radius: 0.6rem;
  img {
    width: 18rem;
    height: 12rem;
    border-top-right-radius: 0.6rem;
    border-top-left-radius: 0.6rem;
  }
  div {
    padding: 1rem;
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.2rem;
      color: #3e3e3e;
    }
    p {
      color: black;
      margin: 0;
      font-weight: 550;
      text-transform: capitalize;
      font-size: 1.6rem;
      letter-spacing: 0.07rem;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    img {
      width: 14rem;
      height: 11rem;
    }
    div {
      span {
        font-size: 1rem;
      }
      p {
        font-size: 1.4rem;
      }
    }
  }
`;

const Trending = () => {
  const properties = [
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      title: "3BHK Flat",
      price: "2.35 Cr",
      area: "1400sqft",
      location: "Mayur Vihar 1, Dehradun",
      category: "Flat",
      image:
        "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
  ];

  return (
    <MainBox>
      <HeaderBox>
        <h2>
          Trending in <span>{`Dehradun`}</span>
        </h2>
        <Link>
          See All <FaChevronRight />
        </Link>
      </HeaderBox>

      <PropertiesBox>
        {properties.map((p) => {
          return (
            <PropertyBox key={p.image}>
              <Link to={"/property"}>
                <img src={p.image} alt="" />
                <div>
                  <span>{p.title}</span>
                  <p>₹ {p.price}</p>
                  <span>{p.location}</span>
                  <span>{p.category}</span>
                </div>
              </Link>
            </PropertyBox>
          );
        })}
      </PropertiesBox>
    </MainBox>
  );
};

export default Trending;
