import React, { useState } from "react";
import styled from "styled-components";
import { notification } from "antd";
import { message } from "antd";

const MainDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: #f6f5f59b;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: fit-content;
  grid-gap: 1rem;
  padding: 2rem 0;
  overflow-x: hidden;
  border-radius: 0.4rem;
  @media only screen and (min-width: 0px) and (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;
const LeftDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #3f7bff;
    font-weight: 300;
  }
`;
const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 70%;
  /* background-color: red; */
  gap: 1rem;
  @media only screen and (min-width: 0px) and (max-width: 850px) {
    border-bottom: 1px dashed #1a61f9;
    padding-bottom: 2rem;
  }
  span {
    color: #ff0000d1;
    margin-top: -1.2rem;
    margin-bottom: -0.5rem;
    font-size: 0.8rem;
    padding: 0 0.5rem;
  }
  textarea {
    border: 1px solid rgba(166, 166, 166, 0.3);
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    &::placeholder {
      color: rgba(200, 200, 200, 1);
    }
    margin-bottom: 0.3rem;

    &:focus {
      outline: none;
      border-bottom: 1px solid #d91903;
    }
  }
`;

const RightDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #4e4e4e;
    font-weight: 300;
    color: #3f7bff;
  }
`;
const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: red; */
  width: 50%;
  text-align: center;
  padding-bottom: 1rem;
  p {
    text-transform: uppercase;
    color: #2f2f2f;
    font-weight: bold;
  }
  span {
    color: #656565;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(166, 166, 166, 0.3);
  border-radius: 5px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  margin-bottom: 5px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #d91903;
  }
`;

const Btn = styled.button`
  font-weight: bold;
  border: 2px solid #828181;
  background-color: transparent;

  color: black;
  overflow: hidden;
  padding: 0.5rem 2rem;
  position: relative;
  text-decoration: none;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  z-index: 0;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 0.9rem;
  &::after {
    background-color: #d61a07;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: 0.2s transform ease-out;
    will-change: transform;
    z-index: -1;
  }
  &:hover::after {
    transform: translate(0, 0);
  }
  &:hover {
    border: 2px solid transparent;
    color: white;
    transform: scale(1.05);
    font-weight: 500;
    will-change: transform;
  }
  @media only screen and (min-width: 0px) and (max-width: 850px) {
    margin: 0 auto;
  }
`;

const ContactsUs = () => {
  const [api, contextHolderNot] = notification.useNotification({
    duration: 1.5,
  });
  const openNotificationWithIcon = (type, msg) => {
    api[type]({
      message: msg,
    });
  };
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
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const defaultField = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [inpField, setInpField] = useState(defaultField);
  const [isLoading, setIsLoading] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [messageErr, setMessage] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onChangeHandler = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    if (id === "name") {
      setNameErr(false);
    }
    if (id === "email") {
      setEmailErr(false);
    }
    if (id === "phone") {
      setPhoneErr(false);
    }
    if (id === "message") {
      setMessage(false);
    }
    setInpField({ ...inpField, [id]: val });
  };

  const onSubmitHandler = async () => {
    if (
      inpField.name.trim().length < 1 ||
      inpField.phone.trim().length !== 10 ||
      !validateEmail(inpField.email) ||
      inpField.message.trim().length < 6
    ) {
      if (inpField.name.trim().length < 1) {
        setNameErr(true);
      }
      if (inpField.phone.trim().length !== 10) {
        setPhoneErr(true);
      }
      if (!validateEmail(inpField.email)) {
        setEmailErr(true);
      }
      if (inpField.message.trim().length < 6) {
        setMessage(true);
      }
      return;
    }
    setIsLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/query/new-query`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...inpField,
        }),
      }
    );
    const data = await res.json();
    if (res.ok) {
      success(data.message);
    } else {
      error(data.message);
    }
    setIsLoading(false);
    setInpField(defaultField);
    setOpen(true);
  };

  return (
    <MainDiv id="contact-us">
      {" "}
      {contextHolderNot}
      {contextHolder}
      <LeftDiv>
        <h2>Online Inquiry</h2>
        <FormBox>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            onChange={onChangeHandler}
            value={inpField.name}
          />
          {nameErr && <span>Enter name</span>}
          <Input
            type="email"
            id="email"
            placeholder="Email"
            onChange={onChangeHandler}
            value={inpField.email}
          />{" "}
          {emailErr && <span>Invalid email</span>}
          <Input
            type="number"
            id="phone"
            placeholder="Phone"
            onChange={onChangeHandler}
            value={inpField.phone}
          />{" "}
          {phoneErr && <span>Invalid Phone</span>}
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={onChangeHandler}
            value={inpField.message}
          ></textarea>{" "}
          {messageErr && <span>Message too short</span>}
          <Btn onClick={onSubmitHandler}>Submit</Btn>
        </FormBox>
      </LeftDiv>
      <RightDiv>
        <h2>Contact details</h2>
        <TextBox>
          <p>email</p>
          <span>futureproperties@gmail.com</span>
        </TextBox>
        <TextBox>
          <p>Contact Number</p>
          <span>+919058241229 +919058241436</span>
        </TextBox>
        <TextBox>
          <p>office address</p>
          <span style={{ textTransform: "capitalize" }}>
            4th Floor, NV TOWER, NH7, Haridwar-Dehradun Highway, Opposite Nilaya
            Heights, Dehradun
          </span>
        </TextBox>
      </RightDiv>
    </MainDiv>
  );
};

export default ContactsUs;
