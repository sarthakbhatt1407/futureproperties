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
  z-index: 10000;
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
    margin-top: 1rem;
    h2 {
      font-size: 1.2rem;
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
  a {
    width: 30rem;
    box-shadow: 0.1rem 0.1rem 0.5rem #eeeded;
    display: flex;
    border-radius: 0.4rem;
    gap: 0.7rem;
    align-items: center;
    overflow: hidden;

    img {
      width: 16rem;
      height: 11rem;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      span {
        font-size: 1rem;
        color: #3e3e3e;
      }
      p {
        color: black;
        margin: 0;
        font-weight: 550;
        text-transform: capitalize;
        font-size: 1.4rem;
        letter-spacing: 0.07rem;
      }
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    a {
      width: 23rem;
      height: fit-content;
      gap: 0.5rem;
      img {
        width: 48%;
        height: 6.5rem;
      }
      div {
        gap: 0.3rem;
        span {
          font-size: 0.75rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

const MostViewd = () => {
  const city = useSelector((state) => state.city);
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
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
          subCategory: "mostviewed",
        }),
      }
    );
    const data = await res.json();
    if (data.status) {
      setProperties(data.properties);
      if (data.properties.length > 0) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetcher();
  }, [city]);

  return (
    <MainBox>
      <HeaderBox>
        <h2>
          Most Viewed in <span>{`${city}`}</span>
        </h2>
        <Link to={"/properties"}>
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
                  <div
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    <span>
                      {p.title.split(" ").slice(0, 4).join(" ")}
                      {p.title.split(" ").length > 4 && "..."}
                    </span>
                    <p>₹ {formatToIndianCurrency(p.price)}</p>
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

export default MostViewd;
