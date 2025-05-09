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
import { Button, message } from "antd";

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
  width: 85%;
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
const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000038;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalBox = styled.div`
  background-color: white;
  width: 30%;

  height: fit-content;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  z-index: 20;

  @media only screen and (min-width: 0px) and (max-width: 1000px) {
    width: 90%;
  }
`;

const ModalFormBox = styled.div`
  background-color: white;
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  button {
    background-color: #1677ff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.09rem;
    &:last-child {
      background-color: #bbb9b9;
    }
  }
`;

const LabelInpBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 74%;
  span {
    color: #ff0000ab;
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 1000px) {
    width: 100%;
  }
`;
const Label = styled.label`
  font-size: 0.9rem;
  letter-spacing: 0.06rem;
  color: #9e9e9e;
  text-transform: capitalize;
`;

const Input = styled.textarea`
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  outline: none;
  border: 1px solid #d7d7d7;

  &::placeholder {
    color: #d4cdcd;
    letter-spacing: 0.09rem;
    text-transform: capitalize;
  }
  &:focus {
    border: 1px solid #c0c0c0;
    box-shadow: 0.1rem 0.1rem 0.5rem #c0c0c0;
  }
`;

const Property = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = (msg) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };

  const error = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };

  const warning = (msg) => {
    messageApi.open({
      type: "warning",
      content: msg,
    });
  };

  const navigate = useNavigate();
  const w = window.screen.width > 700 ? "52vw" : "92.2vw";
  const t = window.screen.width > 700 ? "0" : "1rem";
  const h = window.screen.width > 700 ? "70vh" : "30vh";
  const [property, setProperty] = useState(null);
  const [images, setImages] = useState([]);
  const id = useParams().id;
  const title = useParams().title;
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userName = useSelector((state) => state.userName);
  const userContact = useSelector((state) => state.userContact);
  const [user, setUser] = useState(null);
  const contentBoxRef = useRef(null); // Add a ref for ContentBox
  const userId = useSelector((state) => state.userId);
  const [showModal, setShowModal] = useState(false);
  const [msg, setMsg] = useState("");

  const getUserData = async (id) => {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/get-user-by-id`,
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
      setUser(data.user);
    }
  };

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
      console.log(data);

      const imgArr = data.property.images.split("+");
      const resArr = imgArr.map((img) => {
        return { url: img };
      });
      setImages(resArr);
      getUserData(data.property.userId);
      setProperty(data.property);
      setLoading(false);
    }

    // Scroll the ContentBox to the top
    if (contentBoxRef.current) {
      contentBoxRef.current.scrollTop = 0;
    }
  };
  const querySubmit = async () => {
    if (msg.length === 0) {
      error("Message cannot be empty!");
      return;
    }
    setLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/query/add-query`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          contactNum: userContact,
          message: msg,
          property: id,
          userTo: user.id,
          userFrom: userId,
        }),
      }
    );
    const data = await res.json();
    if (data.success) {
      success(data.message);
      setShowModal(false);
    } else {
      error(data.message);
    }
    setLoading(false);
  };
  function formatToIndianCurrency(number) {
    if (number >= 10000000) {
      // Convert to crore
      return `${(number / 10000000).toFixed(2)} cr`;
    } else if (number >= 100000) {
      // Convert to lakh
      return `${(number / 100000).toFixed(2)} lakh`;
    } else {
      // Format as standard currency if below 1 lakh
      return `${number.toLocaleString("en-IN")}`;
    }
  }

  useEffect(() => {
    fetcher();
  }, [id]);
  return (
    <>
      <MainBox>
        {contextHolder}
        {showModal && (
          <Modal>
            <ModalBox>
              <ModalFormBox>
                <LabelInpBox>
                  <Label htmlFor="msg">Message</Label>
                  <Input
                    type="text"
                    id="msg"
                    rows={10}
                    onChange={(e) => {
                      setMsg(e.target.value);
                    }}
                  />
                </LabelInpBox>
                <BtnBox>
                  <button onClick={querySubmit}>Submit</button>
                  <button
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Cancel
                  </button>
                </BtnBox>
              </ModalFormBox>
            </ModalBox>
          </Modal>
        )}
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
                    style={{
                      width: `${w}`,
                      borderRadius: ".4rem",
                      marginTop: `${t}`,
                    }}
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
                <UpperDetailsBox
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  <h1>{property.title}</h1>
                  <h2>
                    ₹ {formatToIndianCurrency(property.price)}{" "}
                    <span>+ Govt Charges & Tax</span>
                  </h2>{" "}
                  <Divider />
                  <h3 style={{ whiteSpace: "pre-line" }}>{property.desc}</h3>
                  <h4>
                    {property.locality}, {property.city}
                  </h4>
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
                        <span>{property.area} sq.ft.</span>
                      </div>
                      <div>
                        <i style={{ backgroundColor: "#e2f1f9" }}>
                          <FaIndianRupeeSign />
                        </i>
                        <span>{formatToIndianCurrency(property.price)}</span>
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

                      <li>Facing Road :{property.facingRoad} ft.</li>
                      {/* <li>{property.desc}</li> */}
                    </ul>
                  </AniBox>
                </UpperDetailsBox>
              </UpperBox>
              <LowerBox>
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
                          {formatToIndianCurrency(property.price)}
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
                          {property.locality}, {property.city}
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
                          {property.facingRoad}
                        </span>
                      </Descriptions.Item>{" "}
                    </Descriptions>
                  </DescBox>

                  {user && userId != user.id && (
                    <LoginBox>
                      <h6>Seller Details</h6>
                      <Divider />
                      <div>
                        <Avatar
                          style={{ backgroundColor: "#87d068" }}
                          icon={<FaUser />}
                        />
                        <p>
                          {user.name} <span> ({user.userSince})</span>
                        </p>
                      </div>
                      {!isLoggedIn && (
                        <>
                          <p>
                            <FaPhone /> +91-
                            {user.contactNum.toString().slice(0, 3)}XXXXX
                            {user.contactNum.toString().slice(-2)}
                          </p>
                          <span>Login to see full contact details.</span>
                        </>
                      )}
                      {isLoggedIn && user && (
                        <>
                          <p>
                            <FaPhone />{" "}
                            <a
                              href={`tel:+91-${user.contactNum}`}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              +91-{user.contactNum}
                            </a>
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
                        <button
                          onClick={() => {
                            setShowModal(true);
                          }}
                        >
                          Send Query
                        </button>
                      )}
                    </LoginBox>
                  )}
                  {user && userId === user.id && (
                    <LoginBox>
                      <h6>Profile</h6>
                      <Divider />
                      <div>
                        <Avatar
                          style={{ backgroundColor: "#87d068" }}
                          icon={<FaUser />}
                        />
                        <p>
                          {user.name} <span> ({user.userSince})</span>
                        </p>
                      </div>
                      {isLoggedIn && (
                        <>
                          <span>Click to go to profile.</span>
                        </>
                      )}
                      {isLoggedIn && (
                        <button
                          onClick={() => {
                            navigate("/profile");
                          }}
                        >
                          My account
                        </button>
                      )}
                    </LoginBox>
                  )}
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
