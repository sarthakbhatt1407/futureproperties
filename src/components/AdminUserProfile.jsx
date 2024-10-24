import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Footer from "../components/Footer";
import {
  AccountCircle,
  LocalShipping,
  LocationOn,
  Settings,
} from "@mui/icons-material";

import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import PcNav from "../components/PcNav";
import MobileBottomNavigation from "../components/MobileBottomNavigation";
import { BiArea } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Loader from "../components/Loader";

const MainBox1 = styled.div`
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
const OuterBox = styled.div`
  width: 100%;
  margin: auto;
  height: fit-content;
  background-color: #f7f7f7;

  @media only screen and (max-width: 1099px) {
    padding: 0;
  }
`;
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: auto;

  p {
    margin-top: 1rem;
    text-transform: capitalize;
    color: #777;
    font-size: 1.2rem;

    span {
      color: #3f7bff;
    }
  }
  h1 {
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: black;
  }
  @media only screen and (max-width: 1099px) {
    width: 90%;
    margin: auto;
    padding: 0;
    gap: 0;
    p {
      font-size: 0.9rem;
    }
    h1 {
      margin-top: 0;
      font-size: 2.4rem;
    }
  }
`;
const LinksAndDetailsBox = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 2fr; */
  display: flex;
  gap: 2rem;
  @media only screen and (max-width: 1099px) {
    flex-direction: column;
  }
`;
const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: start;
  background-color: white;
  button {
    width: 20rem;
    padding: 2rem 1rem;
    background-color: white;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 1.2rem;
    gap: 1rem;
    border: none;
    transition: all 1s;
    svg {
      transform: scale(1.5);
    }
    &:hover {
      background-color: #dcdcdc;
    }
    @media only screen and (max-width: 1099px) {
      width: 100%;
      font-size: 1rem;
      padding: 1.5rem 1rem;
      justify-content: center;

      svg {
        transform: scale(1.2);
      }
    }
  }
  @media only screen and (max-width: 1099px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* gap: 1rem; */
    width: 100%;
  }
`;

const DetailsBox = styled.div`
  width: 73%;
  box-shadow: 0.2rem 0.2rem 1rem #d5d5d5;
  border-radius: 0.8rem;
  padding: 2rem;
  background-color: white;
  height: 50svh;
  overflow: scroll;
  @media only screen and (max-width: 1099px) {
    padding: 2rem;
    width: 83%;
    margin: auto;
  }
`;

const PropertiesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;
  a {
    text-decoration: none;
    color: black;
  }

  @media only screen and (min-width: 0px) and (max-width: 700px) {
    gap: 1.5rem;
  }
`;

const PropertyBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 94%;
  margin: auto;
  padding: 1rem;
  gap: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.7rem;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 0.6rem;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 18rem;
    border-radius: 0.7rem;
  }
  p {
    margin: 0;
    margin-top: 0.7rem;
    margin-left: 0.4rem;
    text-transform: none;
    font-size: 0.95rem;
    color: #000000ca;
    span {
      font-weight: 600;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    img {
      width: 100%;

      border-radius: 0.7rem;
    }
    p {
      display: none;
    }
  }
`;
const MyDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  i {
    margin: 1rem 0;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    padding-bottom: 0.7rem;
    color: black;
    font-size: 1.5rem;
    border-bottom: 1px solid #e9e6e6;
  }
`;

const UserInformationBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  span {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 1099px) {
    grid-template-columns: 1fr 2.4fr;
    span {
      font-size: 1.1rem;
    }
  }
`;
const InfoBox = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;
const LabelInputBox = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: #828282;
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 0.09rem;
  }
  input {
    border: none;
    box-shadow: 0.2rem 0.2rem 1rem #d5d5d5;
    padding: 1rem;
    width: 70%;
    text-transform: capitalize;
  }
  @media only screen and (max-width: 1099px) {
    label {
      font-size: 1rem;
    }
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h3 {
    font-size: 1.6rem;
    margin: 0;
  }

  button {
    background-color: #3f7bfe;
    border: none;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    color: white;
    font-weight: 600;
    letter-spacing: 0.07rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    h3 {
      display: none;
    }
  }
`;

const MidDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-transform: capitalize;
  h3 {
    margin: 0;
    color: black;
    font-weight: 600;
    font-size: 1.6rem;
    letter-spacing: 0.07rem;
  }
  h4 {
    display: none;
  }
  div {
  }
  p {
    margin: 0;
    text-transform: none;
    font-size: 0.95rem;
    color: #000000ca;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    gap: 0.5rem;
    h4 {
      display: block;
      margin: 0;
      color: black;
      font-weight: 600;
      font-size: 1.2rem;
      letter-spacing: 0.07rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;
const HighLights = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  background-color: white;
  border-radius: 0.7rem;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
  }
`;

const HighLightDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 9rem;
  gap: 1rem;

  i {
    svg {
      transform: scale(1.5);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    span {
      color: #000000a1;
    }
    p {
      margin: -0.5rem 0;
      text-transform: capitalize;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      svg {
        transform: scale(1.2);
      }
    }
    div {
      align-items: center;
      justify-content: center;
      p {
        font-size: 0.7rem;
      }
    }
  }
`;

const BTN = styled.button`
  border: none;
  margin: 1rem 0;
  background-color: #3f7bfe;
  color: white;
  padding: 0.7rem 3rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 600;
`;

const AdminUserProfile = () => {
  const [currentActive, setCurrentActive] = useState("mydetails");
  const [properties, setProperties] = useState([]);
  const userId = useParams().id;
  const userName = useSelector((state) => state.userName);
  const userContact = useSelector((state) => state.userContact);
  const userSince = useSelector((state) => state.userSince);
  const city = useSelector((state) => state.city);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fecther = async () => {
    setLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/property/get-property-by-userId`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
        }),
      }
    );
    const data = await res.json();
    if (data.status) {
      if (data.properties.length > 0) {
      }

      setProperties(data.properties);
    }
    setLoading(false);
  };

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    fecther();
    return () => {};
  }, [userId]);

  const activeHandler = (e) => {
    setCurrentActive(e.target.id);
  };

  const iconHandler = (e) => {
    setCurrentActive(e.target.parentElement.id);
  };

  return (
    <>
      <MainBox>
        {loading && <Loader />}
        <p>
          Home / <span>User's Account</span>
        </p>
        <h1>User's Account</h1>

        <LinksAndDetailsBox>
          <LinksBox>
            {currentActive === "mydetails" && (
              <>
                <button
                  style={{ backgroundColor: "#eeeeee", color: "#3F7BFF" }}
                  id="mydetails"
                  onClick={activeHandler}
                >
                  <AccountCircle onClick={iconHandler} /> User's details
                </button>
              </>
            )}
            {!(currentActive === "mydetails") && (
              <button id="mydetails" onClick={activeHandler}>
                <AccountCircle onClick={iconHandler} /> My details
              </button>
            )}
          </LinksBox>
          <DetailsBox>
            {currentActive === "mydetails" && (
              <>
                <MyDetailsBox>
                  <h3>User's details</h3>
                  <p>Personal Information</p>
                  <UserInformationBox>
                    <span>User Information</span>
                    <InfoBox>
                      <LabelInputBox>
                        <label htmlFor="">Name</label>
                        <input type="text" disabled value={userName} />
                      </LabelInputBox>

                      <LabelInputBox>
                        <label htmlFor="">Contact Number</label>
                        <input type="text" disabled value={userContact} />
                      </LabelInputBox>
                      <LabelInputBox>
                        <label htmlFor="">User Since</label>
                        <input type="text" disabled value={userSince} />
                      </LabelInputBox>
                    </InfoBox>
                  </UserInformationBox>
                </MyDetailsBox>
              </>
            )}
          </DetailsBox>
        </LinksAndDetailsBox>
      </MainBox>
    </>
  );
};

export default AdminUserProfile;
