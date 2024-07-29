import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import { Descriptions } from "antd";
import PcNav from "../components/PcNav";

const items = [
  {
    key: "1",
    label: "UserName",
    children: "Zhou Maomao",
  },
  {
    key: "2",
    label: "Telephone",
    children: "1810000000",
  },
  {
    key: "3",
    label: "Live",
    children: "Hangzhou, Zhejiang",
  },
  {
    key: "4",
    label: "Remark",
    children: "empty",
  },
  {
    key: "5",
    label: "Address",
    children: "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
  },
];

const MainBox = styled.div`
  background-color: #fafafa;
`;

const contentStyle = {
  height: "50vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SliderBox = styled.div`
  div {
    div {
      button {
      }
      ul {
        li {
          background-color: #dff300;
        }
      }
    }
  }
`;

const UpperBox = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  @media only screen and (min-width: 0px) and (max-width: 699px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;
const UpperDetailsBox = styled.div``;

const Property = () => {
  const w = window.screen.width > 700 ? "50vw" : "100vw";
  const h = window.screen.width > 700 ? "70vh" : "60vh";
  const images = [
    {
      url: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      url: "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      url: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      url: "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
    {
      url: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/17/Photo_h600_w900/70148533_1_PropertyImage1702792242603_600_900.jpg",
    },
    {
      url: "https://housing-images.n7net.in/4f2250e8/8c9937610110f5ffeaedf6688371d88e/v0/medium/anirudh_vansihka_greens-rajpur_dehradun-dehradun-anirudh_land_promoters_pvt_ltd.jpeg",
    },
  ];
  return (
    <>
      <PcNav />
      <MainBox>
        <UpperBox>
          <SliderBox>
            <Carousel
              arrows
              infinite={false}
              autoplay
              dotPosition="bottom"
              style={{ width: `${w}`, borderRadius: ".4rem" }}
              adaptiveHeight={true}
            >
              {images.map((i) => {
                return (
                  <div>
                    <img
                      style={contentStyle}
                      src={i.url}
                      alt=""
                      style={{
                        width: "100%",
                        height: `${h}`,
                        opacity: ".95",
                        borderRadius: ".4rem",
                      }}
                    />
                  </div>
                );
              })}
            </Carousel>
          </SliderBox>
          <UpperDetailsBox>
            <Descriptions title="Property Info" items={items} />
          </UpperDetailsBox>
        </UpperBox>
      </MainBox>
    </>
  );
};

export default Property;
