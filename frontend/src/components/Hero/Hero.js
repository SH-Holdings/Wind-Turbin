import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 685px;
  // background-image: url("/images/mywindturbinehero.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;
  color: #5392b0;
  padding-top: 102px;
  margin-top: -102px;

  @media (max-width: 480px) {
    align-items: center;
    background-position: center;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin: 0px 150px -240px 300px;
  // push to top
  margin-top: -25%;
  color: #5392b0;

  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 0 20px;
    text-align: center;
  }
`;

const Subtitle = styled.span`
  font-size: 3rem;
  font-weight: 700;
  display: block;
  color: #333333;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <video autoPlay loop muted>
        <source src="/videos/windturbine.mp4" type="video/mp4" />
      </video>

      <Title>
        Welcome to <Subtitle>MY WIND TURBINE</Subtitle>
      </Title>
    </HeroSection>
  );
};

export default Hero;
