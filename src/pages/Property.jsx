import React, { useEffect, useRef, useState } from "react";
import { Avatar, Carousel, Divider, Image } from "antd";
import styled from "styled-components";
import { Descriptions } from "antd";
import MobileNav from "../components/MobileNav";
import PcNav from "../components/PcNav";
import { BiArea } from "react-icons/bi";
import {
  FaHouseChimneyWindow,
  FaIndianRupeeSign,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import { FaChartPie, FaRegCompass } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import MobileBottomNavigation from "../components/MobileBottomNavigation";
import News from "../components/News";
import MostViewd from "../components/MostViewed";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import Trending from "../components/Trending";

const MainBox = styled.div`
  position: relative;
  height: 100svh;
  background-color: #f5f5f5;
`;
const ContentBox = styled.div`
  height: 100svh;
  position: relative;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  width: 90%;
  margin: auto;
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
    display: none;
    gap: 1rem;
    font-size: 0.9rem;
    span {
      background-color: #e4e8f1;
      padding: 0.2rem 0.5rem;
      border-radius: 0.2rem;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    h1 {
      font-size: 1.6rem;
    }
    h2 {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1rem;
      margin-top: -0.5rem;
    }
    p {
      display: flex;
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
      text-align: center;
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
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    width: 100%;
    padding: 1rem 0;
    p {
      font-size: 1.3rem;
    }
    div {
      align-items: center;
      justify-content: center;
      div {
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        span {
          font-size: 0.9rem;
        }
        i {
          padding: 0.5rem 0.7rem;
          padding-bottom: 0.7rem;
          svg {
            transform: scale(1);
          }
        }
      }
    }
  }
`;

const LowerBox = styled.div`
  /* padding: 1rem; */
`;
const DescAndContactBox = styled.div`
  display: grid;
  grid-template-columns: 2.9fr 1fr;
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 0.7rem;
  width: 90%;
  margin: auto;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const DescBox = styled.div`
  margin: 0 1rem;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    margin: 1rem 0;
  }
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  height: fit-content;
  padding: 1rem 0;
  /* gap: 2rem; */
  background-color: #f6f6f6;
  h6 {
    margin: 0;
    font-size: 2rem;
    @media only screen and (min-width: 0px) and (max-width: 700px) {
      font-size: 1.8rem;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem 0;
    p {
      margin: 0;
      display: flex;
      font-size: 1.2rem;
      gap: 0.5rem;

      span {
        font-size: 0.8rem;
      }
    }
  }
  p {
    margin: 0;
    font-size: 2rem;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 0px) and (max-width: 700px) {
      font-size: 1.9rem;
    }
  }
  button {
    border: none;
    margin: 1rem 0;
    background-color: #3f7bfe;
    color: white;
    padding: 0.7rem 3rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    a {
      color: black;
      text-decoration: none;
    }
  }
  span:not(:last-child) {
    letter-spacing: 0.07rem;
    font-size: 0.9rem;
    color: #282727;
    @media only screen and (min-width: 0px) and (max-width: 700px) {
      font-size: 0.8rem;
    }
  }
`;

const Property = () => {
  const navigate = useNavigate();
  const w = window.screen.width > 700 ? "52vw" : "100vw";
  const h = window.screen.width > 700 ? "83vh" : "35vh";
  const [property, setProperty] = useState(null);
  const [images, setImages] = useState([]);
  const id = useParams().id;
  const title = useParams().title;
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  // const property = {
  //   title: "3 BHK Flat",
  //   price: "1.5 Cr",
  //   category: "Flat",
  //   desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
  //   address: "Mayur Vihar 1, Dehradun",
  //   furnishing: "Furnished",
  //   propertyStatus: "Ready to move",
  //   area: "2430 sq.ft.",
  //   floors: 2,
  //   facing: "East Facing",
  //   old: "0-5 yrs old",
  //   facingRoad: "30 feet road facing road",
  // };
  const contentBoxRef = useRef(null); // Add a ref for ContentBox

  const fetcher = async () => {
    setLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/property/get-property-by-id`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const data = await res.json();

    if (data.status) {
      const imgArr = data.property.images.split("+");
      const resArr = imgArr.map((img) => {
        return { url: img };
      });
      setImages(resArr);

      setProperty(data.property);
      setLoading(false);
    }

    // Scroll the ContentBox to the top
    if (contentBoxRef.current) {
      contentBoxRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    fetcher();
  }, [id]);
  return (
    <>
      <MainBox>
        <ContentBox ref={contentBoxRef}>
          <PcNav show={false} />
          {loading && <Loader />}
          {property && (
            <>
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
                            src={`${process.env.REACT_APP_BASE_URL}/${i.url}`}
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
                  <p>
                    <span>{property.propertyStatus}</span>{" "}
                    <span>{property.furnishing}</span>
                  </p>{" "}
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
                      <li>{property.propertyStatus}</li>
                      <li>{property.furnishing}</li>
                      <li>{property.floors} floors</li>

                      <li>{property.facingRoad}</li>
                      <li>
                        3 Bedrooms , 4 Bathrooms, 2 Balconies with Pooja Room
                      </li>
                    </ul>
                  </AniBox>
                </UpperDetailsBox>
              </UpperBox>
              <LowerBox>
                {" "}
                <Divider />
                <DescAndContactBox>
                  <DescBox>
                    <Descriptions
                      title="Property details"
                      bordered
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
                      <Descriptions.Item label="propertyStatus">
                        <span
                          style={{
                            fontWeight: "600",
                            fontSize: ".95rem",
                            letterSpacing: "0.05rem",
                          }}
                        >
                          {" "}
                          {property.propertyStatus}
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
                    </Descriptions>
                  </DescBox>

                  <LoginBox>
                    <h6>Seller Details</h6>
                    <Divider />
                    <div>
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<FaUser />}
                      />
                      <p>
                        Sarthak bhatt <span> (Since 2020)</span>
                      </p>
                    </div>
                    {!isLoggedIn && (
                      <>
                        <p>
                          <FaPhone /> +91-789XXXXXX4
                        </p>
                        <span>Login to see full contact details.</span>
                      </>
                    )}
                    {isLoggedIn && (
                      <>
                        <p>
                          <FaPhone /> +91-7895603314
                        </p>
                        <span>Contact seller.</span>
                      </>
                    )}

                    {!isLoggedIn && (
                      <button
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        Login
                      </button>
                    )}
                    {isLoggedIn && (
                      <button onClick={() => {}}>Send Query</button>
                    )}
                  </LoginBox>
                </DescAndContactBox>
                {property.subCategory === "trending" && <MostViewd />}
                {property.subCategory === "mostviewed" && <Trending />}
                {property.subCategory === "handpicked" && <MostViewd />}
                <Divider />
                <News />
                <Divider />
                <Footer />
              </LowerBox>
            </>
          )}
        </ContentBox>
        <MobileBottomNavigation view={1} />
      </MainBox>
    </>
  );
};

export default Property;
