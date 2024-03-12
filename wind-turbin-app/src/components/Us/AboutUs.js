import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column; // Stack content vertically
  align-items: center; // Center content horizontally
  padding: 50px 20px; // Adjust padding as necessary
  background-color: #f0f0f0; // Matching background color from the screenshot
  text-align: center; // Center-align text for a cohesive look
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #333; // Adjust text color to fit your design
  margin: 0 0 10px 0; // Adjust margin to space out title from content
`;

const Content = styled.div`
  max-width: 60%;
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  color: #6200ea;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const AboutUs = () => (
  <AboutSection>
    <Title>About Us</Title>
    <Content>
      <p>
        We are introducing an educational and interactive web platform focusing
        on sustainability, renewable energy, and wind turbines. You will learn
        about renewable energy and perform analyses based on the IEC61400-2
        standard for small wind turbines.
      </p>
      <ReadMoreLink href="#">READ MORE →</ReadMoreLink>
    </Content>
  </AboutSection>
);

export default AboutUs;
