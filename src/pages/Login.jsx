import React, { useEffect } from "react";
import PcNav from "../components/PcNav";
import styled from "styled-components";
import MobileNav from "../components/MobileNav";

const MainBox = styled.div``;

const LoginBox = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 100svh;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    height: 100svh;
  }
`;
const Login = () => {
  useEffect(() => {
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
    };
  }, []);
  return (
    <MainBox>
      {/* <PcNav /> */}
      <LoginBox>
        <div id="otpless-login-page"></div>
      </LoginBox>
    </MainBox>
  );
};

export default Login;
