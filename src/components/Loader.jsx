import { Spin } from "antd";
import React from "react";
import styled from "styled-components";

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff91;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000000;
  position: absolute;
  top: 0;
  left: 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

const Loader = () => {
  return (
    <MainBox>
      <div>
        <Spin tip="Loading..." size="large"></Spin>
      </div>
    </MainBox>
  );
};

export default Loader;
