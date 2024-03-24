import React, { useState } from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;
  background-color: #f0f0f0;
  text-align: center;
  padding-top: 102px;
  margin-top: -102px;

  @media (max-width: 480px) {
    padding: var(--navbar-height, 50px) 20px;
  }
`;

const Title = styled.h2`
  font-size: 60px; 
  font-weight: bold;
  color: #333; 
  margin: 0 0 20px 0;

  @media (max-width: 408px) {
    font-size: 2.5rem; 
    padding: 0 10px; 
  }s
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  margin-top: 30px;
  color: #6200ea;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    width: auto;
    margin-top: 10px;
  }
`;
const Content = styled.div`
  max-width: 60%;
  font-size: 1.4rem;
  line-height: 1.6;
  text-align: justify;

  @media (max-width: 480px) {
    max-width: 90%;
    font-size: 1rem;
    text-align: left;
    text-align: justify;
  }
`;

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AboutSection id="about-us">
      <Title>About Us</Title>
      <Content>
        <p>
          We are introducing an educational and interactive web platform
          focusing on sustainability, renewable energy, and wind turbines. You
          will learn about renewable energy and perform analyses based on the
          IEC61400-2 standard for small wind turbines.
          {isExpanded && (
            // add line break
            <span>
              <br />
              <br />
              The aim of the project is to create a Graphical User Interface
              (GUI) for clients who would like to design a small wind turbine
              system following the safety requirements of the international
              standards IEC 61400-2. The interface provides an easy way to
              analyze the structure of the turbine machine under normal and
              extreme load conditions based on specific inputs provided. The
              analysis of the simple load model will provide output information
              on the fatigue loads on blades and rotor shaft, yaw error load on
              blades, etc. for the small wind turbine performance. By adhering
              to the structured framework of the IEC standard, "Mywindturbine"
              intents to equip professionals, engineers, and intellectuals with
              the knowledge and resources to actively contribute towards
              fostering a sustainable energy landscape.
            </span>
          )}
        </p>
        <ReadMoreLink onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "READ LESS ←" : "READ MORE →"}
        </ReadMoreLink>
      </Content>
    </AboutSection>
  );
};

export default AboutUs;
