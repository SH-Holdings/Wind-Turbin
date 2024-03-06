import React from "react";
import styled from "styled-components";

// Assuming HeroSection is your component where the background image is set
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center; // Vertically centers content in the container
  align-items: flex-start; // Aligns items to the start (left) of the container
  height: 685px;
  background-image: url("/images/mywindturbinehero.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;
  padding-left: 15%; // Adjust based on your design preference
  color: #5392b0;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin: 0 0 20px 0;
  // push to top
  margin-top: -25%;
  color: #5392b0;
`;

const Subtitle = styled.span`
  font-size: 3rem; // Adjust size as needed
  font-weight: 700;
  display: block;
  color: #333333;
`;

// Your React component
const Hero = () => {
  return (
    <HeroSection>
      <Title>
        Welcome to <Subtitle>MY WIND TURBINE</Subtitle>
      </Title>
    </HeroSection>
  );
};

export default Hero;
