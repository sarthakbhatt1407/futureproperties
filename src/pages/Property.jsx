import React from "react";
import { Carousel, Divider, Image } from "antd";
import styled from "styled-components";
import { Descriptions } from "antd";
import MobileNav from "../components/MobileNav";
import PcNav from "../components/PcNav";
import { BiArea } from "react-icons/bi";
import { FaHouseChimneyWindow, FaIndianRupeeSign } from "react-icons/fa6";
import { FaChartPie, FaRegCompass } from "react-icons/fa";

const MainBox = styled.div`
  position: relative;
  height: 100svh;
  background-color: #fafafa;
`;
const ContentBox = styled.div`
  height: 100svh;
  overflow: scroll;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    height: 91.5svh;
  }
`;

const contentStyle = {
  height: "50vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SliderBox = styled.div`
  div {
    div {
      button {
      }
      ul {
        li {
          /* background-color: #dff300; */
        }
      }
    }
  }
`;

const UpperBox = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  @media only screen and (min-width: 0px) and (max-width: 699px) {
    flex-direction: column;
    padding: 0;
  }
`;
const UpperDetailsBox = styled.div`
  padding: 0 1rem;
  h1 {
    margin: 0;
  }
  h2 {
    margin: 0;
    span {
      font-size: 0.85rem;
      font-weight: 400;
      color: #000000d6;
      letter-spacing: 0.07rem;
    }
  }
  h3 {
    font-weight: 350;
    color: #000000d5;
    letter-spacing: 0.03rem;
  }
  p {
    display: flex;
    gap: 1rem;
    font-size: 0.9rem;
    span {
      background-color: #e4e8f1;
      padding: 0.2rem 0.5rem;
      border-radius: 0.2rem;
    }
  }
`;

const AniBox = styled.div`
  background-color: #bed1f833;
  padding: 1rem;
  border-radius: 0.4rem;
  width: 80%;
  p {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.06rem;
    margin: 0;
  }
  div {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      i {
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        padding: 1rem;
        padding-top: 0.8rem;
        svg {
          transform: scale(1.3);
        }
      }
    }
  }
`;

const LowerBox = styled.div`
  padding: 1rem;
`;
const DescAndContactBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const DescBox = styled.div``;

const Property = () => {
  const w = window.screen.width > 700 ? "52vw" : "100vw";
  const h = window.screen.width > 700 ? "83vh" : "35vh";
  const images = [
    {
      url: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      url: "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      url: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      url: "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      url: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      url: "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
  ];

  const property = {
    title: "3 BHK Flat",
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
  };

  return (
    <>
      <MainBox>
        <ContentBox>
          <PcNav />
          <UpperBox>
            <SliderBox>
              <Carousel
                arrows
                infinite={false}
                autoplay
                dotPosition="bottom"
                style={{ width: `${w}`, borderRadius: ".4rem" }}
                adaptiveHeight={true}
              >
                {images.map((i) => {
                  return (
                    <div>
                      <Image
                        style={contentStyle}
                        src={i.url}
                        alt=""
                        style={{
                          width: "100%",
                          height: `${h}`,
                          opacity: ".95",
                          borderRadius: ".4rem",
                        }}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </SliderBox>
            <UpperDetailsBox>
              <h1>{property.title}</h1>
              <h2>
                ₹ {property.price} <span>+ Govt Charges & Tax</span>
              </h2>{" "}
              <Divider />
              <h3>{property.desc}</h3>
              <h4>{property.address}</h4>
              {/* <p>
                <span>{property.propertystatus}</span>{" "}
                <span>{property.furnishing}</span>
              </p>{" "} */}
              <Divider />
              <AniBox>
                <p>
                  <span style={{ backgroundColor: "transparent" }}>
                    <FaHouseChimneyWindow />
                  </span>
                  <span
                    style={{
                      backgroundColor: "transparent",
                      marginLeft: "-1.2rem",
                    }}
                  >
                    Property Highlights
                  </span>
                </p>
                <div>
                  <div>
                    <i style={{ backgroundColor: "#f5dfbf" }}>
                      <BiArea />
                    </i>
                    <span>{property.area}</span>
                  </div>
                  <div>
                    <i style={{ backgroundColor: "#e2f1f9" }}>
                      <FaIndianRupeeSign />
                    </i>
                    <span>{property.price}</span>
                  </div>
                  <div>
                    <i style={{ backgroundColor: "#f5dfbf" }}>
                      <FaChartPie />
                    </i>
                    <span>₹ 4927 per sq.ft.</span>
                  </div>
                  <div>
                    <i style={{ backgroundColor: "#d7f0c3" }}>
                      <FaRegCompass />
                    </i>
                    <span>{property.facing}</span>
                  </div>
                </div>
                <ul>
                  <li>{property.propertystatus}</li>
                  <li>{property.furnishing}</li>
                  <li>{property.floors} floors</li>

                  <li>{property.facingRoad}</li>
                  <li>3 Bedrooms , 4 Bathrooms, 2 Balconies with Pooja Room</li>
                </ul>
              </AniBox>
              <Divider />
            </UpperDetailsBox>
          </UpperBox>
          <LowerBox>
            <DescAndContactBox>
              <DescBox>
                <Descriptions
                  title="Property details"
                  style={{ textTransform: "capitalize" }}
                >
                  <Descriptions.Item label="title">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {" "}
                      {property.title}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item label="price">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {" "}
                      {property.price}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item label="address">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {" "}
                      {property.address}
                    </span>
                  </Descriptions.Item>{" "}
                  <Descriptions.Item label="furnishing">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {property.furnishing}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item label="propertystatus">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {" "}
                      {property.propertystatus}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item label="area">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {" "}
                      {property.area}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item label="floors">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {" "}
                      {property.floors}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item label="facing">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {" "}
                      {property.facing}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item label="old">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {" "}
                      {property.old}
                    </span>
                  </Descriptions.Item>
                  <Descriptions.Item label="facingRoad">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {" "}
                      {property.facingRoad}
                    </span>
                  </Descriptions.Item>{" "}
                  <Descriptions.Item label="desc">
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: ".95rem",
                        letterSpacing: "0.05rem",
                      }}
                    >
                      {" "}
                      3 Bedrooms , 4 Bathrooms, 2 Balconies with Pooja Room
                    </span>
                  </Descriptions.Item>
                </Descriptions>
              </DescBox>
            </DescAndContactBox>
          </LowerBox>
          <MobileNav />
        </ContentBox>
      </MainBox>
    </>
  );
};

export default Property;
