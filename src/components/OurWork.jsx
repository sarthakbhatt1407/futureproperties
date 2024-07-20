import React from "react";
import { FaLongArrowAltDown, FaLongArrowAltRight } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { MdOutlineDoneOutline } from "react-icons/md";
import styled from "styled-components";

const MainDiv = styled.div`
  margin: 2rem 0;
`;

const UpperTextBox = styled.div`
  width: 70%;
  text-align: center;
  margin: 2rem auto;
  h2 {
    font-size: 2rem;
    margin: 0;
    letter-spacing: 0.09rem;
    text-transform: capitalize;
  }
  p {
    font-size: 0.95rem;
    color: #2a2a2a;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    width: 90%;
  }
`;

const WorkBox = styled.div`
  display: flex;
  width: 80%;
  gap: 2rem;
  padding: 1rem 0;
  margin: 2rem auto;
  align-items: center;
  svg {
    transform: scale(4);
    color: #34ca98;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    flex-direction: column;
  }
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  svg {
    transform: scale(3);
  }
  h2 {
    margin: 0;
    font-size: 1.8rem;
    letter-spacing: 0.09rem;
  }
  p {
    margin: 0;
    color: #505050;
    font-size: 1rem;
    letter-spacing: 0.06rem;
  }
`;

const OurWork = () => {
  const work = [
    {
      label: "Evaluate Property",
      icon: <GoGraph style={{}} />,
      para: "Explore property details, photos, and neighborhood info for informed decisions. Our comprehensive tools empower you to make informed decisions and find the perfect match for your needs.",
      key: 0,
    },
    {
      label: "Meet Your Agent",
      icon: <FaPeopleCarryBox style={{ color: "#F7951D" }} />,
      para: "Our agents are local experts, ready to provide personalized guidance, answer questions, and schedule property viewings to ensure you find the ideal home.",
      key: 1,
    },
    {
      label: "Close The Deal",
      icon: <MdOutlineDoneOutline />,
      para: "Let us handle the complexities of closing. Trust us to handle contracts, inspections, and negotiations, ensuring a stress-free transaction for your new home.",
      key: 2,
    },
  ];
  return (
    <MainDiv>
      <UpperTextBox>
        <h2>How it works?</h2>
        <p>
          Our user-friendly platform simplifies the real estate journey. Start
          by browsing our extensive listings of homes and properties
        </p>
      </UpperTextBox>
      <WorkBox>
        {work.map((w) => {
          return (
            <>
              <DescBox key={w.key}>
                {w.icon}
                <h2>{w.label}</h2>
                <p>{w.para}</p>
              </DescBox>
              {w.label === "Close The Deal" ? (
                ""
              ) : window.screen.width > 700 ? (
                <FaLongArrowAltRight />
              ) : (
                <FaLongArrowAltDown style={{ transform: "scale(2)" }} />
              )}
            </>
          );
        })}
      </WorkBox>
    </MainDiv>
  );
};

export default OurWork;
