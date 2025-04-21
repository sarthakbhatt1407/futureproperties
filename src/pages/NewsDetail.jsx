import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { id } = useParams(); // Extract the news ID from the URL
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsById = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/blog/${id}`
        );
        const data = await response.json();
        if (response.ok) {
          setNews(data);
        } else {
          console.error("Error fetching news:", data.message);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsById();
  }, [id]);

  if (loading) {
    return (
      <MainBox>
        <ContentBox>
          <PcNav show={true} />
          <NewsBox>
            <h2>Loading...</h2>
          </NewsBox>
        </ContentBox>
        <MobileBottomNavigation />
      </MainBox>
    );
  }

  if (!news) {
    return (
      <MainBox>
        <ContentBox>
          <PcNav show={true} />
          <NewsBox>
            <h2>News not found</h2>
          </NewsBox>
        </ContentBox>
        <MobileBottomNavigation />
      </MainBox>
    );
  }

  return (
    <MainBox>
      <ContentBox>
        <PcNav show={true} />
        <NewsBox>
          <h2>{news.title}</h2>

          <p>{news.desc}</p>
          <img
            src={`${process.env.REACT_APP_BASE_URL}/${news.image}`}
            alt={news.title}
          />
          <span style={{ whiteSpace: "pre-line" }}>{news.summary}</span>
        </NewsBox>
        <ReadyToLaunch />
        <Footer />
      </ContentBox>
      <MobileBottomNavigation />
    </MainBox>
  );
};

export default NewsDetail;
