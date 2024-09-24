import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import CategoryLoader from "./CategoryLoader";

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
  const city = useSelector((state) => state.city);
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  const fetcher = async () => {
    setLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/property/get-property-by-subcategory`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          city: city,
          subCategory: "handpicked",
        }),
      }
    );
    const data = await res.json();
    if (data.status) {
      if (data.properties.length > 0) {
        setLoading(false);
      }
      setProperties(data.properties);
    }
  };

  useEffect(() => {
    fetcher();
  }, [city]);
  return (
    <MainBox>
      <HeaderBox>
        <h2>
          <span>Handpicked</span> Properties
        </h2>
        <Link to={"/properties"}>
          See All <FaChevronRight />
        </Link>
      </HeaderBox>
      {loading && <CategoryLoader />}
      <Carousel
        autoplay
        style={
          window.screen.width > 700 ? { width: "90%", margin: "auto" } : ""
        }
      >
        {!loading &&
          properties.map((p) => {
            return (
              <Link to={`/property/${p.title.split(" ").join("-")}/${p.id}`}>
                <ImgBox
                  key={p.image}
                  bg={`${process.env.REACT_APP_BASE_URL}/${
                    p.images.split("+")[0]
                  }`}
                >
                  <div>
                    <span>{p.city}</span>
                  </div>
                  <LowerBox>
                    <p>
                      <span> {p.area}</span>
                      <span>{p.locality}</span>
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
