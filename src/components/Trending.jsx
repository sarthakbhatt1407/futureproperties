import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CategoryLoader from "./CategoryLoader";

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
      text-transform: capitalize;
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
      text-transform: capitalize;
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
      gap: 0.4rem;
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
          subCategory: "trending",
        }),
      }
    );
    const data = await res.json();
    if (data.status) {
      setLoading(false);

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
          Trending in <span>{`${city}`}</span>
        </h2>
        <Link>
          See All <FaChevronRight />
        </Link>
      </HeaderBox>

      <PropertiesBox>
        {loading && <CategoryLoader />}
        {!loading &&
          properties.map((p) => {
            return (
              <PropertyBox key={p.image}>
                <Link to={`/property/${p.title.split(" ").join("-")}/${p.id}`}>
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/${
                      p.images.split("+")[0]
                    }`}
                    alt=""
                  />
                  <div>
                    <span>{p.title}</span>
                    <p>₹ {p.price}</p>
                    <span>{p.locality}</span>
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
