import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import favicon from "../assets/favicon.ico";
import { AccountCircle } from "@mui/icons-material";

const MainDiv = styled.nav`
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 0.2rem 2rem;
  width: 90%;
  margin: auto;
  border-radius: 0.4rem;
  @media only screen and (min-width: 0px) and (max-width: 699px) {
    display: flex;
    padding: 0;
    width: 90%;
  }
`;
const LeftDiv = styled.div`
  display: flex;

  align-items: center;
  text-transform: uppercase;
  span {
    font-weight: 600;
    font-size: 1.6rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 699px) {
    span {
      display: none;
    }
  }
`;
const RightDiv = styled.div`
  display: flex;
  gap: 2rem;
  a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
    font-weight: 450;
  }
  @media only screen and (min-width: 0px) and (max-width: 699px) {
    a {
      font-size: 1rem;
      &:not(:last-child) {
        display: none;
      }
    }
  }
`;

const PcNav = () => {
  return (
    <MainDiv data-aos="fade-down">
      {/*  */}
      <LeftDiv>
        <img src={favicon} alt="" />
        <span>future Properties</span>
      </LeftDiv>
      <RightDiv>
        <Link>Home</Link>
        <Link>Properties</Link>
        <Link>Contact</Link>
        <Link>
          <AccountCircle
            style={{ transform: "scale(1.3)", color: "#3F7BFF" }}
          />
        </Link>
      </RightDiv>
    </MainDiv>
  );
};

export default PcNav;

// import * as React from "react";

// import Box from "@mui/material/Box";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Divider from "@mui/material/Divider";
// import Typography from "@mui/material/Typography";
// import MenuItem from "@mui/material/MenuItem";
// import Drawer from "@mui/material/Drawer";
// import { Reorder } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function PcNav({ mode, toggleColorMode }) {
//   const isAdmin = false;
//   const isLoggedIn = false;
//   const [open, setOpen] = React.useState(false);
//   const [active, setActive] = React.useState("");
//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };
//   const w = window.screen.width;

//   const logoStyle = {
//     width: "5.8rem",
//     height: "2.1rem",

//     cursor: "pointer",
//     margin: w < 901 ? " 0  4rem 0 1rem" : " 0  4rem 0 2rem",
//   };

//   return (
//     <AppBar
//       position="fixed"
//       data-aos="fade-down"
//       sx={{
//         boxShadow: 0,
//         bgcolor: "transparent",
//         backgroundImage: "none",
//         mt: 2,
//       }}
//     >
//       <Container maxWidth="">
//         <Toolbar
//           variant="regular"
//           sx={(theme) => ({
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             flexShrink: 0,
//             borderRadius: "5px",
//             bgcolor:
//               theme.palette.mode === "light"
//                 ? "rgba(255, 255, 255, 0.832)"
//                 : "rgba(0, 0, 0, 0.4)",
//             backdropFilter: "blur(24px)",
//             maxHeight: 40,
//             border: "1px solid",
//             borderColor: "divider",
//             boxShadow:
//               theme.palette.mode === "light"
//                 ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
//                 : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
//           })}
//         >
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: "flex",
//               alignItems: "center",
//               ml: "-18px",
//               px: 0,
//             }}
//           >
//             <img style={logoStyle} alt="logo of sitemark" />
//           </Box>
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               gap: 0.5,
//               alignItems: "center",
//             }}
//           >
//             <Button
//               color="primary"
//               variant="contained"
//               size="small"
//               component="a"
//               target="_blank"
//               style={{
//                 backgroundColor: "#ff4800",
//                 letterSpacing: "0.09rem",
//                 color: "white",
//               }}
//             >
//               {!isLoggedIn && (
//                 <Link
//                   to={"/login"}
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   Sign in
//                 </Link>
//               )}
//               {isLoggedIn && !isAdmin && (
//                 <Link
//                   to={"/user-panel/home"}
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   Dashboard
//                 </Link>
//               )}
//               {isLoggedIn && isAdmin && (
//                 <Link
//                   to={"/admin-panel/orders"}
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   Dashboard
//                 </Link>
//               )}
//             </Button>
//           </Box>
//           <Box sx={{ display: { sm: "", md: "none" } }}>
//             <Button
//               variant="text"
//               aria-label="menu"
//               onClick={toggleDrawer(true)}
//               sx={{ minWidth: "30px", p: "4px" }}
//             >
//               <Reorder style={{ color: "black" }} />
//             </Button>
//             <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
//               <Box
//                 sx={{
//                   minWidth: "60dvw",
//                   p: 2,
//                   backgroundColor: "background.paper",
//                   flexGrow: 1,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "end",
//                     flexGrow: 1,
//                   }}
//                 ></Box>
//                 <MenuItem>Overview</MenuItem>
//                 <MenuItem>Services</MenuItem>
//                 <MenuItem>Start With Us</MenuItem>
//                 <MenuItem>Contact Us</MenuItem>
//                 {/* <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem> */}
//                 <Divider />
//               </Box>
//             </Drawer>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default PcNav;
