import React, { useEffect } from "react";
import PcNav from "../components/PcNav";
import styled from "styled-components";
import MobileNav from "../components/MobileNav";

const MainBox = styled.div``;

const LoginBox = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 85svh;
  justify-content: center;
  align-items: center;

  div {
    z-index: 100000;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    padding: 1rem;
    height: 90svh;
  }
`;
const Login = () => {
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
      if (window.Otpless) {
        // Initialize or configure Otpless SDK here
        window.Otpless.initialize({
          /* options */
        });
      }
    };

    // Clean up by removing the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <MainBox>
      <PcNav />
      <LoginBox>
        <div id="otpless-login-page"></div>
      </LoginBox>
    </MainBox>
  );
};

export default Login;
