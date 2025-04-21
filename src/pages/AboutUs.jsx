import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  FaHome,
  FaHandshake,
  FaMapMarkedAlt,
  FaUserTie,
  FaChartLine,
  FaCheckCircle,
  FaBullseye,
} from "react-icons/fa";
import PcNav from "../components/PcNav";
import MobileBottomNavigation from "../components/MobileBottomNavigation";
import Footer from "../components/Footer";

const MainBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100svh",
}));

const ContentBox = styled(Box)(({ theme }) => ({
  height: "100svh",
  overflow: "scroll",
  "@media only screen and (min-width: 0px) and (max-width: 700px)": {
    height: "91.5svh",
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "80vh",
  backgroundColor: "#1976d2",
  display: "flex",
  alignItems: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

const SpecializationCard = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

const AboutUs = () => {
  const specializations = [
    {
      title: "Residential Properties",
      icon: <FaHome size={40} />,
      description: "Luxury homes and apartments",
    },
    {
      title: "Commercial Spaces",
      icon: <FaUserTie size={40} />,
      description: "Office spaces and retail outlets",
    },
    {
      title: "Property Management",
      icon: <FaHandshake size={40} />,
      description: "Complete property care",
    },
    {
      title: "Investment Advisory",
      icon: <FaChartLine size={40} />,
      description: "Strategic property investments",
    },
    {
      title: "Location Services",
      icon: <FaMapMarkedAlt size={40} />,
      description: "Prime location selection",
    },
  ];

  const locations = [
    "Rajpur Road",
    "Sahastradhara Road",
    "Haridwar Bypass",
    "GMS Road",
    "Doiwala, Bhauwala, Premnagar",
    "And many more developing residential areas",
  ];

  const whyChooseUs = [
    "Verified & legal properties with proper documentation",
    "Expert knowledge of Dehradun’s property market",
    "Transparent pricing and site visits",
    "Support for first-time buyers, NRIs, and investors",
    "Post-sale support and custom-built home solutions",
  ];

  return (
    <>
      <MainBox>
        <ContentBox>
          <PcNav show={true} clr={"#EFEFEE"} />
          <Box>
            <HeroSection>
              <Container sx={{ position: "relative", zIndex: 1 }}>
                <Typography variant="h1" color="white" gutterBottom>
                  Future Properties
                </Typography>
                <Typography variant="h4" color="white" gutterBottom>
                  Simplifying Real Estate in Dehradun
                </Typography>
              </Container>
            </HeroSection>

            <Section>
              <Container>
                <Typography variant="h3" gutterBottom align="center">
                  About Our Company
                </Typography>
                <Typography variant="body1" paragraph align="center">
                  Future Properties DDN PRIVATE LIMITED is a trusted and
                  fast-growing real estate company in Dehradun, dedicated to
                  helping you find the perfect residential and commercial
                  properties in the most prime locations of Uttarakhand. Whether
                  you're looking for a house for sale in Dehradun, a
                  ready-to-move apartment, a plot, or an investment property —
                  we bring you the best options with complete transparency and
                  guidance.
                </Typography>
                <Typography variant="body1" paragraph align="center">
                  With a strong local presence and years of real estate
                  experience, we specialize in:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <FaCheckCircle color="#2196f3" />
                    </ListItemIcon>
                    <ListItemText primary="Buying and selling properties in Dehradun" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaCheckCircle color="#2196f3" />
                    </ListItemIcon>
                    <ListItemText primary="Residential home construction & villa projects" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaCheckCircle color="#2196f3" />
                    </ListItemIcon>
                    <ListItemText primary="MDDA-approved plots and land deals" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaCheckCircle color="#2196f3" />
                    </ListItemIcon>
                    <ListItemText primary="Commercial property for sale and lease" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FaCheckCircle color="#2196f3" />
                    </ListItemIcon>
                    <ListItemText primary="Real estate investment consultancy" />
                  </ListItem>
                </List>
              </Container>
            </Section>

            <Section sx={{ backgroundColor: "#f5f5f5" }}>
              <Container>
                <Typography variant="h3" gutterBottom align="center">
                  Our Specializations
                </Typography>
                <Grid container spacing={4}>
                  {specializations.map((spec, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <SpecializationCard>
                        <CardContent sx={{ textAlign: "center" }}>
                          {spec.icon}
                          <Typography variant="h6" sx={{ mt: 2 }}>
                            {spec.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {spec.description}
                          </Typography>
                        </CardContent>
                      </SpecializationCard>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Section>

            <Section>
              <Container>
                <Typography variant="h3" gutterBottom align="center">
                  Why Choose Us
                </Typography>
                <List>
                  {whyChooseUs.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <FaCheckCircle color="#2196f3" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Container>
            </Section>

            <Section sx={{ backgroundColor: "#e3f2fd" }}>
              <Container>
                <Typography variant="h3" gutterBottom align="center">
                  Locations We Serve
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                  }}
                >
                  {locations.map((location, index) => (
                    <Chip
                      key={index}
                      label={location}
                      color="primary"
                      sx={{ margin: 1 }}
                    />
                  ))}
                </Box>
              </Container>
            </Section>

            <Section
              sx={{
                backgroundColor: "#0d47a1",
                color: "white",
                position: "relative",
              }}
            >
              <Container sx={{ position: "relative" }}>
                <Typography variant="h3" gutterBottom align="center">
                  Our Mission
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ maxWidth: 800, margin: "0 auto" }}
                >
                  To simplify real estate for everyone by providing genuine
                  property deals backed by trust, technology, and transparency.
                  We aim to become the most recommended name for property
                  investment in Dehradun and surrounding areas.
                </Typography>
                <Box sx={{ textAlign: "center", mt: 4 }}>
                  <FaBullseye size={60} />
                </Box>
              </Container>
            </Section>
          </Box>
          <Footer />
        </ContentBox>
        <MobileBottomNavigation view={0} />
      </MainBox>
    </>
  );
};

export default AboutUs;
