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
  a {
    width: 18rem;
    @media only screen and (min-width: 0px) and (max-width: 700px) {
      width: 14rem;
    }
  }
  img {
    width: 18rem;
    height: 10rem;
  }
  div {
    padding: 1rem 0.3rem;
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.9rem;
      color: #5f5f5f;
      margin-top: 1rem;
    }
    p {
      color: black;
      margin: -0.9rem 0;
      font-weight: 400;
      text-transform: capitalize;
      font-size: 1.2rem;
      letter-spacing: 0.07rem;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    img {
      width: 14rem;
      height: 7rem;
    }
    div {
      span {
        font-size: 0.8rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
`;

const News = () => {
  const newsArticle = [
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
    },
    {
      title: "Stamp duties in India's Tier-1 , 2, 3 cities",
      desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
      image:
        "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
    },
  ];

  return (
    <MainBox>
      <HeaderBox>
        <h2>
          <span>News & Article</span>
        </h2>
        <Link to={"/news"}>
          See All <FaChevronRight />
        </Link>
      </HeaderBox>

      <PropertiesBox>
        {newsArticle.map((p) => {
          return (
            <PropertyBox key={p.image}>
              <Link to={"/news/1"}>
                <img src={p.image} alt="" />
                <div>
                  <p>{p.title}</p>
                  <span>{p.desc}</span>
                </div>
              </Link>
            </PropertyBox>
          );
        })}
      </PropertiesBox>
    </MainBox>
  );
};

export default News;
