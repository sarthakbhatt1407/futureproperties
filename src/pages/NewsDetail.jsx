import React from "react";
import styled from "styled-components";
import PcNav from "../components/PcNav";
import ReadyToLaunch from "../components/ReadyToLaunch";
import Footer from "../components/Footer";
import MobileBottomNavigation from "../components/MobileBottomNavigation";

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
  const news = {
    title: "Stamp duties in India's Tier-1 , 2, 3 cities",
    desc: "Our user-friendly platform simplifies the real estate journey. Start by browsing our extensive listings of homes and properties",
    image:
      "https://www.rajyasameeksha.com/Uploads/7c3fe97e-1d0d-4f93-beb8-566e492dd953.jpg",
    paraFirst:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid facilis quasi possimus, quo impedit eius amet officiis hic, suscipit soluta exercitationem explicabo asperiores earum voluptatem nobis velit ad, distinctio sint officia nam est? Accusamus magni ipsum voluptatum excepturi rerum eius rem repellat voluptate soluta. ",
    paraSec:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid facilis quasi possimus, quo impedit eius amet officiis hic, suscipit soluta exercitationem explicabo asperiores earum voluptatem nobis velit ad, distinctio sint officia nam est? Accusamus magni ipsum voluptatum excepturi rerum eius rem repellat voluptate soluta. ",
    paratir:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis fugiat quisquam! Ea explicabo deserunt, consequuntur saepe sit labore facilis numquam dicta, debitis earum dolor ad velit nihil aperiam accusantium id assumenda corporis perferendis beatae commodi. Corrupti voluptate fugiat ut assumenda quo modi nobis beatae veritatis ex! Assumenda voluptatibus dolorum reiciendis fugit consequuntur error optio odit sit doloribus consectetur molestiae repudiandae eligendi dolor saepe vero quas, eaque rerum nisi numquam repellendus debitis rem consequatur fugiat. Quam, deleniti doloremque repudiandae harum dicta maxime ex consequatur quis repellendus vitae! Amet, suscipit porro!",
  };
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
