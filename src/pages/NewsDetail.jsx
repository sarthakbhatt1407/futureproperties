import React from "react";
import styled from "styled-components";
import PcNav from "../components/PcNav";
import ReadyToLaunch from "../components/ReadyToLaunch";
import Footer from "../components/Footer";
import MobileBottomNavigation from "../components/MobileBottomNavigation";
import { allNews } from "../data/news";

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
const NewsBox = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  img {
    width: 65%;
  }
  h2 {
    font-size: 2.7rem;
    letter-spacing: 0.08rem;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 1.2rem;
    color: #605f5f;
  }
  span {
    font-size: 1.1rem;
    text-align: justify;
    letter-spacing: 0.08rem;
    padding: 1rem 0;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    width: 90%;
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
    img {
      width: 100%;
    }
  }
`;

const NewsDetail = () => {
  const news = allNews[0];
  return (
    <MainBox>
      <ContentBox>
        <PcNav show={true} />
        <NewsBox>
          {" "}
          <h2>{news.title}</h2> <p>{news.desc}</p>
          <img src={news.image} alt="" />
          <span>{news.paraFirst}</span>
          <span>{news.paraSec}</span>
          <span>{news.paratir}</span>
        </NewsBox>
        <ReadyToLaunch />
        <Footer />
      </ContentBox>
      <MobileBottomNavigation />
    </MainBox>
  );
};

export default NewsDetail;
