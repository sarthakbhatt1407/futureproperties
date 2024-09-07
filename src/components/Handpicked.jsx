import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const MainBox = styled.div`
  width: 90%;
  margin: 0 auto;
  height: fit-content;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80svh;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
  -webkit-box-shadow: inset 0px 0px 50px 70px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: inset 0px 0px 50px 70px rgba(0, 0, 0, 0.43);
  box-shadow: inset 0px 0px 50px 70px rgba(0, 0, 0, 0.43);
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    height: 45svh;
  }
  div {
    padding: 1rem;
    span {
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;

const LowerBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 90%;

  p {
    display: flex;
    flex-direction: column;
    span {
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
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
    h2 {
      font-size: 1.35rem;
    }
    a {
      font-size: 1rem;
    }
  }
`;

const Handpicked = () => {
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
          <span>Handpicked</span> Properties
        </h2>
        <Link>
          See All <FaChevronRight />
        </Link>
      </HeaderBox>
      <Carousel
        autoplay
        style={
          window.screen.width > 700 ? { width: "90%", margin: "auto" } : ""
        }
      >
        {properties.map((p) => {
          return (
            <Link to={"/property"}>
              <ImgBox key={p.image} bg={p.image}>
                <div>
                  <span>Dehradun</span>
                </div>
                <LowerBox>
                  <p>
                    <span> {p.area}</span>
                    <span>Mayur Vihar</span>
                  </p>
                  <p>
                    <span>{p.title}</span>
                    <span>{p.price}</span>
                  </p>
                </LowerBox>
              </ImgBox>
            </Link>
          );
        })}
      </Carousel>
    </MainBox>
  );
};

export default Handpicked;
