import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";

import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import {
  AccountCircle,
  AddOutlined,
  ChatBubbleOutlineOutlined,
  EmailOutlined,
  Home,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MainBox = styled.div`
  display: none;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: block;
  }
`;
export default function MobileBottomNavigation(props) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState(props.view ? props.view : 0);

  return (
    <MainBox>
      <Box sx={{ width: "100%" }}>
        <BottomNavigation showLabels value={value}>
          <BottomNavigationAction
            label="Home"
            onClick={() => {
              navigate("/");
            }}
            icon={<Home />}
          />
          <BottomNavigationAction
            label="Property"
            onClick={() => {
              navigate("/properties");
            }}
            icon={<ApartmentOutlinedIcon />}
          />

          {isLoggedIn && (
            <BottomNavigationAction
              label="Post"
              onClick={() => {
                navigate("/post-property");
              }}
              icon={
                <AddOutlined
                  style={{
                    backgroundColor: "#3F7BFF",
                    color: "white",
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    marginBottom: 5,
                  }}
                />
              }
            />
          )}
          {isLoggedIn && (
            <BottomNavigationAction
              label="Queries"
              onClick={() => {
                navigate("/queries");
              }}
              icon={<ChatBubbleOutlineOutlined />}
            />
          )}
          {isLoggedIn && (
            <BottomNavigationAction
              label="Account"
              onClick={() => {
                navigate("/profile");
              }}
              icon={<AccountCircle />}
            />
          )}
          {!isLoggedIn && (
            <BottomNavigationAction
              label="Account"
              onClick={() => {
                navigate("/login");
              }}
              icon={<AccountCircle />}
            />
          )}
        </BottomNavigation>
      </Box>
    </MainBox>
  );
}
