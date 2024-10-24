import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MobileBottomNavigation from "../components/MobileBottomNavigation";
import PcNav from "../components/PcNav";
import { Link } from "react-router-dom";
import { Select, Space } from "antd";
import { BiArea } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Footer from "../components/Footer";
import ReadyToLaunch from "../components/ReadyToLaunch";
import { useSelector } from "react-redux";
import CategoryLoader from "../components/CategoryLoader";
import Loader from "../components/Loader";
const MainBox = styled.div`
  position: relative;
  height: 100svh;
`;
const ContentBox = styled.div`
  height: 100svh;
  overflow: scroll;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    height: 91.5svh;
  }
`;
const SearchBox = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div:first-child {
    padding: 1rem 0;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    p {
      margin: 0;
    }
    h2 {
      margin: 0;
      margin-bottom: 2rem;
      font-size: 2.5rem;
      font-weight: 500;
      letter-spacing: 0.08rem;
      color: #242424;
      text-transform: capitalize;
    }
  }
`;

const DetailPara = styled.p`
  color: #777;
  font-size: 1.6rem;
  @media only screen and (max-width: 1099px) {
    padding: 1rem;
    font-size: 1.2rem;
  }
`;
const HeadingAndSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
  span {
    text-transform: capitalize;
    color: #777;
    font-size: 1rem;
    margin-bottom: -2.3rem;
    margin: 1rem 0;
  }
  h1 {
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: black;
  }
  @media only screen and (max-width: 1099px) {
    width: 100%;
    h1 {
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: 0rem;
      padding: 0 1rem;
    }
    span {
      font-size: 0.8rem;
      margin: 0;
      margin-left: 1rem;
    }
  }
`;

const FilterAndSearchBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 40%;
  @media only screen and (max-width: 1099px) {
    width: 95%;
    margin: auto;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
  }
`;
const Input = styled.input`
  width: 70%;
  padding: 1rem 2rem;
  border: 1px solid #e8e8e8;
  border-radius: 3rem;
  box-shadow: 0.1rem 0.2rem 0.5rem #eaeaea;
  outline: none;
  @media only screen and (max-width: 1099px) {
    width: 70%;
  }
`;
const ResultAndFilter = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: auto;
  @media only screen and (max-width: 1099px) {
    width: 97%;
    flex-direction: column;
    align-items: start;
    margin-top: -1rem;
  }
`;

const PropertiesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  a {
    text-decoration: none;
    color: black;
  }

  @media only screen and (min-width: 0px) and (max-width: 700px) {
    gap: 1.5rem;
  }
`;

const PropertyBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 85%;
  margin: auto;
  padding: 1rem;
  gap: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.7rem;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 0.6rem;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 18rem;
    border-radius: 0.7rem;
  }
  p {
    margin: 0;
    margin-top: 0.7rem;
    margin-left: 0.4rem;
    text-transform: none;
    font-size: 0.95rem;
    color: #000000ca;
    span {
      font-weight: 600;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    img {
      width: 100%;

      border-radius: 0.7rem;
    }
    p {
      display: none;
    }
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h3 {
    font-size: 1.6rem;
    margin: 0;
  }

  button {
    background-color: #3f7bfe;
    border: none;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    color: white;
    font-weight: 600;
    letter-spacing: 0.07rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    h3 {
      display: none;
    }
  }
`;

const MidDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-transform: capitalize;
  h3 {
    margin: 0;
    color: black;
    font-weight: 600;
    font-size: 1.6rem;
    letter-spacing: 0.07rem;
  }
  h4 {
    display: none;
  }
  div {
  }
  p {
    margin: 0;
    text-transform: none;
    font-size: 0.95rem;
    color: #000000ca;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    gap: 0.5rem;
    h4 {
      display: block;
      margin: 0;
      color: black;
      font-weight: 600;
      font-size: 1.2rem;
      letter-spacing: 0.07rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;
const HighLights = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  background-color: white;
  border-radius: 0.7rem;
  @media only screen and (min-width: 0px) and (max-width: 700px) {
  }
`;

const HighLightDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 9rem;
  gap: 1rem;

  i {
    svg {
      transform: scale(1.5);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    span {
      color: #000000a1;
    }
    p {
      margin: -0.5rem 0;
      text-transform: capitalize;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      svg {
        transform: scale(1.2);
      }
    }
    div {
      align-items: center;
      justify-content: center;
      p {
        font-size: 0.7rem;
      }
    }
  }
`;

const AllProperties = () => {
  const city = useSelector((state) => state.city);

  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [defaultSort, setDefaultSort] = useState("Popularity");

  const fetcher = async () => {
    setLoading(true);
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/property/get-property-by-city`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          city: city,
        }),
      }
    );
    const data = await res.json();
    console.log(data);

    if (data.status) {
      if (data.properties.length > 0) {
      }

      setProperties(data.properties);
      setFilteredProperties(data.properties);
    }
    setLoading(false);
  };

  // const properties = [
  //   {
  //     title: "3 BHK Flat",
  //     category: "Flat",
  //     price: "1.5 Cr",
  //     desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
  //     address: "Mayur Vihar 1, Dehradun",
  //     furnishing: "Furnished",
  //     propertystatus: "Ready to move",
  //     area: "2430 sq.ft.",
  //     floors: 2,
  //     facing: "East Facing",
  //     old: "0-5 yrs old",
  //     facingRoad: "30 feet road facing road",
  //     image:
  //       "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
  //   },
  //   {
  //     title: "3 BHK Flat",
  //     category: "Flat",
  //     price: "1.5 Cr",
  //     desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
  //     address: "Mayur Vihar 1, Dehradun",
  //     furnishing: "Furnished",
  //     propertystatus: "Ready to move",
  //     area: "2430 sq.ft.",
  //     floors: 2,
  //     facing: "East Facing",
  //     old: "0-5 yrs old",
  //     facingRoad: "30 feet road facing road",
  //     image:
  //       "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
  //   },
  //   {
  //     title: "3 BHK Flat",
  //     category: "Flat",
  //     price: "1.5 Cr",
  //     desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
  //     address: "Mayur Vihar 1, Dehradun",
  //     furnishing: "Furnished",
  //     propertystatus: "Ready to move",
  //     area: "2430 sq.ft.",
  //     floors: 2,
  //     facing: "East Facing",
  //     old: "0-5 yrs old",
  //     facingRoad: "30 feet road facing road",
  //     image:
  //       "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
  //   },
  //   {
  //     title: "3 BHK Flat",
  //     category: "Flat",
  //     price: "1.5 Cr",
  //     desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
  //     address: "Mayur Vihar 1, Dehradun",
  //     furnishing: "Furnished",
  //     propertystatus: "Ready to move",
  //     area: "2430 sq.ft.",
  //     floors: 2,
  //     facing: "East Facing",
  //     old: "0-5 yrs old",
  //     facingRoad: "30 feet road facing road",
  //     image:
  //       "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
  //   },
  //   {
  //     title: "3 BHK Flat",
  //     category: "Flat",
  //     price: "1.5 Cr",
  //     desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
  //     address: "Mayur Vihar 1, Dehradun",
  //     furnishing: "Furnished",
  //     propertystatus: "Ready to move",
  //     area: "2430 sq.ft.",
  //     floors: 2,
  //     facing: "East Facing",
  //     old: "0-5 yrs old",
  //     facingRoad: "30 feet road facing road",
  //     image:
  //       "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
  //   },
  //   {
  //     title: "3 BHK Flat",
  //     category: "Flat",
  //     price: "1.5 Cr",
  //     desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
  //     address: "Mayur Vihar 1, Dehradun",
  //     furnishing: "Furnished",
  //     propertystatus: "Ready to move",
  //     area: "2430 sq.ft.",
  //     floors: 2,
  //     facing: "East Facing",
  //     old: "0-5 yrs old",
  //     facingRoad: "30 feet road facing road",
  //     image:
  //       "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
  //   },
  //   {
  //     title: "3 BHK Flat",
  //     category: "Flat",
  //     price: "1.5 Cr",
  //     desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
  //     address: "Mayur Vihar 1, Dehradun",
  //     furnishing: "Furnished",
  //     propertystatus: "Ready to move",
  //     area: "2430 sq.ft.",
  //     floors: 2,
  //     facing: "East Facing",
  //     old: "0-5 yrs old",
  //     facingRoad: "30 feet road facing road",
  //     image:
  //       "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
  //   },
  //   {
  //     title: "3 BHK Flat",
  //     category: "Flat",
  //     price: "1.5 Cr",
  //     desc: "3bhk independent house with 4 bath 2kitchen separate stairs &car parking Located at posh area gated colony Mdda approved property.",
  //     address: "Mayur Vihar 1, Dehradun",
  //     furnishing: "Furnished",
  //     propertystatus: "Ready to move",
  //     area: "2430 sq.ft.",
  //     floors: 2,
  //     facing: "East Facing",
  //     old: "0-5 yrs old",
  //     facingRoad: "30 feet road facing road",
  //     image:
  //       "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg, https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg, https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
  //   },
  // ];
  const defaultField = [
    {
      value: "popularity",
      label: "Popularity",
    },
    {
      value: "lowToHigh",
      label: "Price: Low to High",
    },
    {
      value: "highToLow",
      label: "Price: High to Low",
    },
  ];
  const handleChange = (value) => {
    console.log(`${value}`);
    if (value === "popularity") {
      setFilteredProperties(properties);
    }

    if (value === "lowToHigh") {
      // Create a new copy of the array before sorting
      const sortedByPriceAsc = [...properties].sort(
        (a, b) => a.price - b.price
      );
      setFilteredProperties(sortedByPriceAsc); // This will trigger a re-render
    }

    if (value === "highToLow") {
      // Create a new copy of the array before sorting
      const sortedByPriceDesc = [...properties].sort(
        (a, b) => b.price - a.price
      );
      console.log(sortedByPriceDesc);

      setFilteredProperties(sortedByPriceDesc); // This will trigger a re-render
    }
  };
  const onChangeHandler = (e) => {
    const val = e.target.value.toLowerCase();
    const arr = properties.filter((item) => {
      return (
        item.title.toLowerCase().includes(val) ||
        item.price.toString().includes(val) ||
        item.locality.toLowerCase().includes(val)
      );
    });
    setFilteredProperties(arr);
  };

  useEffect(() => {
    fetcher();
  }, [city]);
  return (
    <MainBox>
      <ContentBox>
        <PcNav show={true} />

        <HeadingAndSearch>
          <span>Home / Properties</span>
          <h1>All properties</h1>
        </HeadingAndSearch>
        <ResultAndFilter>
          <DetailPara>Showing all results</DetailPara>{" "}
          <FilterAndSearchBox>
            <Input
              type="text"
              id="search"
              placeholder="Search Properties..."
              onChange={onChangeHandler}
            />

            <Select
              defaultValue="Popularity"
              onChange={handleChange}
              style={{
                width: "15rem",
                height: "3rem",
              }}
              dropdownStyle={{
                textTransform: "capitalize",
                width: "fit-content",
              }}
              options={defaultField}
            />
          </FilterAndSearchBox>
        </ResultAndFilter>
        {/* <SearchBox>
          <div>
            <p>Home/Properties</p>
            <h2>all-properties</h2>
          </div>
          <div>
            <input type="text" />
            <Space wrap>
              <p>Sort by :</p>
              <Select
                defaultValue="Popularity"
                style={{
                  width: "fit-content",
                }}
                dropdownStyle={{
                  textTransform: "capitalize",
                  width: "fit-content",
                }}
                onChange={handleChange}
                options={defaultField}
              />
            </Space>
          </div>
        </SearchBox> */}
        <PropertiesBox>
          {loading && <Loader />}
          {!loading &&
            filteredProperties.map((item) => {
              return (
                <Link to={`/property/${item.title}/${item.id}`} key={item.id}>
                  <PropertyBox>
                    <LeftDiv>
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/${
                          item.images.split("+")[0]
                        }`}
                        alt=""
                      />
                      <p>
                        Seller : <span>Sarthak Bhatt</span>
                      </p>
                    </LeftDiv>
                    <MidDiv>
                      <h3>{item.title}</h3>
                      <h4>₹ {item.price}</h4>
                      <span>
                        {item.locality}, {item.city}
                      </span>
                      <HighLights>
                        <HighLightDiv>
                          <i>
                            <BiArea />
                          </i>
                          <div>
                            <p>{item.area}</p>
                          </div>
                        </HighLightDiv>
                        <HighLightDiv>
                          <i>
                            <FaRegCompass />
                          </i>
                          <div>
                            <p>{item.facing}</p>
                          </div>
                        </HighLightDiv>
                        <HighLightDiv>
                          <i>
                            <GrStatusGood />
                          </i>
                          <div>
                            <p>{item.propertyStatus}</p>
                          </div>
                        </HighLightDiv>
                        <HighLightDiv>
                          <i>
                            <HiOutlineHomeModern />
                          </i>
                          <div>
                            <p>Floors: {item.floors}</p>
                          </div>
                        </HighLightDiv>
                      </HighLights>
                      <p>{item.address}</p>
                      <p>{item.desc}</p>
                    </MidDiv>
                    <RightDiv>
                      <h3>₹ {item.price}</h3>
                      <button>Contact Owner</button>
                    </RightDiv>
                  </PropertyBox>
                </Link>
              );
            })}
        </PropertiesBox>
        <ReadyToLaunch />
        <Footer />
      </ContentBox>
      <MobileBottomNavigation view={1} />
      {/* <MobileNav /> */}
    </MainBox>
  );
};

export default AllProperties;
