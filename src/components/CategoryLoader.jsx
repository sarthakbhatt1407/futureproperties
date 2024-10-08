import React from "react";
import styled, { keyframes } from "styled-components";
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

const Animation = keyframes`
100% {
      background-position: right -50px top 0;
    }
`;

const Loader = styled.div`
  width: 100%;
  border: none;
  height: 20svh;
  background: linear-gradient(90deg, #0000, #ebebeb) left -50px top 0/100px 45rem
    no-repeat #fefefe14;
  animation: ${Animation} 1s infinite linear;
`;
const CategoryLoader = () => {
  return (
    <MainBox>
      <Loader></Loader>
    </MainBox>
  );
};

export default CategoryLoader;
