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
  iframe {
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
  }
`;

const Videos = () => {
  const videos = [
    {
      content: (
        <iframe
          width={window.screen.width > 700 ? "400" : "300"}
          height={window.screen.width > 700 ? "230" : "190"}
          src="https://www.youtube.com/embed/zaAwlboOaB8"
          title="पार्क,मंदिर और Swimming Pool सुविधा के साथ 3Bhk Villa For Sale in dehradun,Mdda Approved"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      key: 0,
    },
    {
      content: (
        <iframe
          width={window.screen.width > 700 ? "400" : "300"}
          height={window.screen.width > 700 ? "230" : "190"}
          src="https://www.youtube.com/embed/6BZvtVdxmMg"
          title="उत्तर दिशा का घर - 4 Bedroom 116 Gaj House/Villa For Sale in Dehradun"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      key: 1,
    },
    {
      content: (
        <iframe
          width={window.screen.width > 700 ? "400" : "300"}
          height={window.screen.width > 700 ? "230" : "190"}
          src="https://www.youtube.com/embed/3c5FzalER_A"
          title="Budget Friendly 3 Bedroom House For Sale in dehradun,100 Square Yard, Mdda Approved"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      key: 2,
    },
    {
      content: (
        <iframe
          width={window.screen.width > 700 ? "400" : "300"}
          height={window.screen.width > 700 ? "230" : "190"}
          src="https://www.youtube.com/embed/QvTQhDmWo-Q"
          title="ISBT Dehradun Ke Paas MDDA Approved 3BHK House! Top Real Estate Company Ki Exclusive Offer! 🏡✨"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      key: 3,
    },
  ];

  return (
    <MainBox>
      <HeaderBox>
        <h2>
          Real Estates<span> Updates</span>
        </h2>
        <Link>
          See All <FaChevronRight />
        </Link>
      </HeaderBox>

      <PropertiesBox>
        {videos.map((p) => {
          return <PropertyBox key={p.key}>{p.content}</PropertyBox>;
        })}
      </PropertiesBox>
    </MainBox>
  );
};

export default Videos;
