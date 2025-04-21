import React, { useEffect, useState } from "react";
import PcNav from "../components/PcNav";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Alert, Button, Flex, Input, message, Spin } from "antd";
import Loader from "../components/Loader";

const MainBox = styled.div`
  position: relative;
`;

const LoginBox = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 85svh;
  justify-content: center;
  align-items: center;

  div {
    z-index: 1000000;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    padding: 1rem;
    height: 90svh;
  }
`;

const RegisterBox = styled.div`
  background-color: white;
  width: 27%;
  height: fit-content;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  justify-content: center;
  padding: 2rem 0;
  z-index: -100;
  box-shadow: 0.1rem 0.1rem 0.6rem #c3c3c3;
  gap: 1.5rem;
  h2 {
    margin: 0;
    z-index: 1;
  }
  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    z-index: 1;
    input {
      width: 90%;
      z-index: 1;
    }
    label {
      text-transform: capitalize;
      color: #7b7b7b;
      font-weight: 600;
      z-index: 1;
    }
    button {
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    width: 90%;

    gap: 1.2rem;
  }
`;

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = (text) => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };
  const error = (text) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };
  const [userExist, setUserExists] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contactNum, setContactNum] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [locErr, setLocErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);

  const [stateErr, setStateErr] = useState(false);
  const defaultField = {
    name: "",
    locality: "",
    city: "",
    state: "",
  };

  const [fields, setFields] = useState(defaultField);
  const onChangeHandler = (e) => {
    const val = e.target.value;
    const id = e.target.id;
    if (id === "name") {
      setNameErr(false);
    }
    if (id === "locality") {
      setLocErr(false);
    }
    if (id === "city") {
      setCityErr(false);
    }
    if (id === "state") {
      setStateErr(false);
    }

    setFields({ ...fields, [id]: val });
  };

  useEffect(() => {
    // Create and append the script
    const script = document.createElement("script");
    script.id = "otpless-sdk";
    script.type = "text/javascript";
    script.src = "https://otpless.com/v2/auth.js";
    script.dataset.appid = "HXJEOACUY6ND36A5JIJZ";
    document.body.appendChild(script);

    // Initialize the SDK or handle any setup after the script loads
    script.onload = () => {
      // Assuming the SDK provides a global object or function
      // if (window.Otpless) {
      //   // Initialize or configure Otpless SDK here
      //   window.Otpless.initialize({
      //     /* options */
      //   });
      // }
    };
    window.otpless = async (otplessUser) => {
      let phoneNumber = otplessUser.identities[0]["identityValue"];
      const contactNum = phoneNumber.substring(2);
      setContactNum(contactNum);
      const city = otplessUser.network.ipLocation.city.name;
      setSpinning(true);
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/user/check-user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contactNum: contactNum,
          }),
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.exists) {
        const loginRes = await fetch(
          `${process.env.REACT_APP_BASE_URL}/user/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contactNum: contactNum,
            }),
          }
        );
        const loginData = await loginRes.json();

        if (loginData.isloggedIn) {
          setTimeout(() => {
            dispatch({
              type: "log in",
              user: loginData.user,
              city: "Dehradun",
            });
            navigate("/");
          }, 700);
        }
      } else {
        setUserExists(data.exists);
      }
      setSpinning(false);
    };

    // Clean up by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmitHandler = async () => {
    if (
      fields.name.length < 2 ||
      fields.locality.length < 2 ||
      fields.city.length < 2 ||
      fields.state.length < 2
    ) {
      if (fields.name.length < 2) {
        setNameErr(true);
      }
      if (fields.locality.length < 2) {
        setLocErr(true);
      }
      if (fields.city.length < 2) {
        setCityErr(true);
      }
      if (fields.state.length < 2) {
        setStateErr(true);
      }
      error("Fill all required fields! ");
      return;
    }
    setSpinning(true);
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fields.name,
        locality: fields.locality,
        city: fields.city,
        state: fields.state,
        contactNum: contactNum,
      }),
    });
    const data = await res.json();
    if (data.success) {
      const loginRes = await fetch(
        `${process.env.REACT_APP_BASE_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contactNum: contactNum,
          }),
        }
      );
      const loginData = await loginRes.json();

      if (loginData.isloggedIn) {
        setTimeout(() => {
          dispatch({
            type: "log in",
            user: loginData.user,
            city: "Dehradun",
          });
          navigate("/");
        }, 700);
      }
    }
    setSpinning(false);
  };
  return (
    <MainBox>
      {spinning && <Loader />}
      {contextHolder}
      <PcNav />
      <LoginBox>
        {userExist && (
          <div
            style={{
              zIndex: "1000",
            }}
            id="otpless-login-page"
          ></div>
        )}

        {!userExist && (
          <RegisterBox>
            <h2>Enter Information</h2>
            <div>
              <label htmlFor="name">Full name</label>
              <Input
                status={nameErr ? "error" : "primary"}
                placeholder="Enter Name"
                onChange={onChangeHandler}
                id="name"
              />
            </div>
            <div>
              <label htmlFor="locality">Locality</label>
              <Input
                status={locErr ? "error" : "primary"}
                placeholder="Enter locality"
                id="locality"
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <Input
                status={cityErr ? "error" : "primary"}
                placeholder="Enter city"
                onChange={onChangeHandler}
                id="city"
              />
            </div>
            <div>
              <label htmlFor="state">state</label>
              <Input
                status={stateErr ? "error" : "primary"}
                placeholder="Enter state"
                onChange={onChangeHandler}
                id="state"
              />
            </div>

            <Button onClick={onSubmitHandler} type="primary">
              Submit
            </Button>
          </RegisterBox>
        )}
      </LoginBox>
    </MainBox>
  );
};

export default Login;
