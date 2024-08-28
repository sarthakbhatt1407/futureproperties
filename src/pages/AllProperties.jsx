import React from "react";
import styled from "styled-components";
import MobileBottomNavigation from "../components/MobileBottomNavigation";
import PcNav from "../components/PcNav";
import { Link } from "react-router-dom";

import { BiArea } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { HiOutlineHomeModern } from "react-icons/hi2";
const MainBox = styled.div`
  position: relative;
  height: 100svh;
`;
const ContentBox = styled.div`
  height: 100svh;
  overflow: scroll;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    height: 91.5svh;
  }
`;
const PropertiesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  a {
    text-decoration: none;
    color: black;
  }

  @media only screen and (min-width: 0px) and (max-width: 700px) {
    gap: 1.5rem;
  }
`;

const PropertyBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 85%;
  margin: auto;
  padding: 1rem;
  gap: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.7rem;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 0.6rem;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 18rem;
    border-radius: 0.7rem;
  }
  p {
    margin: 0;
    margin-top: 0.7rem;
    margin-left: 0.4rem;
    text-transform: none;
    font-size: 0.95rem;
    color: #000000ca;
    span {
      font-weight: 600;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    img {
      width: 100%;

      border-radius: 0.7rem;
    }
    p {
      display: none;
    }
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h3 {
    font-size: 1.6rem;
    margin: 0;
  }

  button {
    background-color: #3f7bfe;
    border: none;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    color: white;
    font-weight: 600;
    letter-spacing: 0.07rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    h3 {
      display: none;
    }
  }
`;

const MidDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-transform: capitalize;
  h3 {
    margin: 0;
    color: black;
    font-weight: 600;
    font-size: 1.6rem;
    letter-spacing: 0.07rem;
  }
  h4 {
    display: none;
  }
  div {
  }
  p {
    margin: 0;
    text-transform: none;
    font-size: 0.95rem;
    color: #000000ca;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    gap: 0.5rem;
    h4 {
      display: block;
      margin: 0;
      color: black;
      font-weight: 600;
      font-size: 1.2rem;
      letter-spacing: 0.07rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;
const HighLights = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  background-color: white;
  border-radius: 0.7rem;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
  }
`;

const HighLightDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 9rem;
  gap: 1rem;
  i {
    svg {
      transform: scale(1.5);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    span {
      color: #000000a1;
    }
    p {
      margin: -0.5rem 0;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      svg {
        transform: scale(1.2);
      }
    }
    div {
      align-items: center;
      justify-content: center;
      p {
        font-size: 0.7rem;
      }
    }
  }
`;

const AllProperties = () => {
  const properties = [
    {
      title: "3 BHK Flat",
      category: "Flat",
      price: "1.5 Cr",
      desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
      address: "Mayur Vihar 1, Dehradun",
      furnishing: "Furnished",
      propertystatus: "Ready to move",
      area: "2430 sq.ft.",
      floors: 2,
      facing: "East Facing",
      old: "0-5 yrs old",
      facingRoad: "30 feet road facing road",
      image:
        "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      title: "3 BHK Flat",
      category: "Flat",
      price: "1.5 Cr",
      desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
      address: "Mayur Vihar 1, Dehradun",
      furnishing: "Furnished",
      propertystatus: "Ready to move",
      area: "2430 sq.ft.",
      floors: 2,
      facing: "East Facing",
      old: "0-5 yrs old",
      facingRoad: "30 feet road facing road",
      image:
        "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
  ];
  return (
    <MainBox>
      <ContentBox>
        <PcNav show={true} />
        <PropertiesBox>
          {properties.map((item) => {
            return (
              <Link to="/property">
                <PropertyBox>
                  <LeftDiv>
                    <img src={item.image.split(",")[0]} alt="" />

                    <p>
                      Seller : <span>Sarthak Bhatt</span>
                    </p>
                  </LeftDiv>
                  <MidDiv>
                    <h3>{item.title}</h3>
                    <h4>₹ {item.price}</h4>
                    <span>dehradun</span>
                    <HighLights>
                      <HighLightDiv>
                        <i>
                          <BiArea />
                        </i>
                        <div>
                          <p>{item.area}</p>
                        </div>
                      </HighLightDiv>
                      <HighLightDiv>
                        <i>
                          <FaRegCompass />
                        </i>
                        <div>
                          <p>{item.facing}</p>
                        </div>
                      </HighLightDiv>
                      <HighLightDiv>
                        <i>
                          <GrStatusGood />
                        </i>
                        <div>
                          <p>{item.propertystatus}</p>
                        </div>
                      </HighLightDiv>
                      <HighLightDiv>
                        <i>
                          <HiOutlineHomeModern />
                        </i>
                        <div>
                          <p>Floors: {item.floors}</p>
                        </div>
                      </HighLightDiv>
                    </HighLights>
                    <p>{item.address}</p>
                    <p>{item.desc}</p>
                  </MidDiv>
                  <RightDiv>
                    <h3>₹ {item.price}</h3>
                    <button>Contact Owner</button>
                  </RightDiv>
                </PropertyBox>
              </Link>
            );
          })}
        </PropertiesBox>
      </ContentBox>
      <MobileBottomNavigation view={1} />
      {/* <MobileNav /> */}
    </MainBox>
  );
};

export default AllProperties;
