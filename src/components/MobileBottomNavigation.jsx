import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";

import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import {
  AccountCircle,
  ChatBubbleOutlineOutlined,
  EmailOutlined,
  Home,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MainBox = styled.div`
  display: none;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: block;
  }
`;
export default function MobileBottomNavigation(props) {
  const navigate = useNavigate();
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
          <BottomNavigationAction
            label="Queries"
            icon={<ChatBubbleOutlineOutlined />}
          />
          <BottomNavigationAction
            label="Account"
            onClick={() => {
              navigate("/login");
            }}
            icon={<AccountCircle />}
          />
        </BottomNavigation>
      </Box>
    </MainBox>
  );
}
