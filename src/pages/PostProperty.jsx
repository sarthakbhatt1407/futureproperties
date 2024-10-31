import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import PropertyCategory from "../components/PropertyCategory";
import OurWork from "../components/OurWork";
import ContactsUs from "../components/ContactUs";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Trending from "../components/Trending";
import MostViewed from "../components/MostViewed";
import News from "../components/News";
import Videos from "../components/Videos";
import Slideshow from "../components/Slideshow";
import Handpicked from "../components/Handpicked";
import MobileBottomNavigation from "../components/MobileBottomNavigation";
import ReadyToLaunch from "../components/ReadyToLaunch";
import PcNav from "../components/PcNav";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { Collapse, Divider, message } from "antd";
import { DeleteForeverOutlined, LinkOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";

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

const HeadingAndSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
  margin-top: 1rem;
  span {
    text-transform: capitalize;
    color: #777;
    font-size: 1rem;
    margin-bottom: -2.3rem;
    margin: 1rem 0;
  }
  h1 {
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: black;
  }
  @media only screen and (max-width: 1099px) {
    width: 100%;
    h1 {
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: 0rem;
      padding: 0 1rem;
    }
    span {
      font-size: 0.8rem;
      margin: 0;
      margin-left: 1rem;
    }
  }
`;
const FilterAndSearchBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 40%;
  @media only screen and (max-width: 1099px) {
    width: 95%;
    margin: auto;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
  }
`;
const DetailPara = styled.p`
  color: #777;
  font-size: 1.6rem;
  @media only screen and (max-width: 1099px) {
    padding: 1rem;
    font-size: 1.2rem;
  }
`;
const Input = styled.input`
  width: 70%;
  padding: 1rem 2rem;
  border: 1px solid #e8e8e8;
  border-radius: 3rem;
  box-shadow: 0.1rem 0.2rem 0.5rem #eaeaea;
  outline: none;
  @media only screen and (max-width: 1099px) {
    width: 70%;
  }
`;
const ResultAndFilter = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: auto;
  @media only screen and (max-width: 1099px) {
    width: 97%;
    flex-direction: column;
    align-items: start;
    margin-top: -1rem;
  }
`;

const QueriesBox = styled.div`
  width: 85%;
  margin: auto;
`;
const NoQueriesBox = styled.div`
  width: 85%;
  margin: auto;
  height: 50svh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.3rem;
    color: #0000008c;
    letter-spacing: 0.09rem;
  }
`;

const PostProperty = () => {
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
  const userId = useSelector((state) => state.userId);
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState([]);
  const navigate = useNavigate();
  const fetcher = async () => {
    setLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/query/get-query-by-userid`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: userId,
        }),
      }
    );
    const data = await res.json();
    setQueries(data.queries);
    setLoading(false);
  };

  useEffect(() => {
    fetcher();
  }, [userId]);
  return (
    <MainBox>
      {contextHolder}
      <ContentBox>
        <PcNav />
        <Form />
      </ContentBox>
      <MobileBottomNavigation view={2} />
    </MainBox>
  );
};

export default PostProperty;
