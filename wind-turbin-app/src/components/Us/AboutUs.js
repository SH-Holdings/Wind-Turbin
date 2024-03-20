import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column; // Stack content vertically
  align-items: center; // Center content horizontally
  padding: 30px 40px; // Increased padding for a denser look
  background-color: #f0f0f0; // Matching background color from the screenshot
  text-align: center; // Center-align text for a cohesive look

  padding-top: 102px; // Adjust this to the height of your navbar
  margin-top: -102px; // Adjust this to the height of your navbar
`;

const Title = styled.h2`
  font-size: 60px; // Increased font size for a bigger title
  font-weight: bold;
  color: #333; // Adjust text color to fit your design
  margin: 0 0 20px 0; // Increased margin to space out title from content
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  margin-top: 30px; // Increased margin for a denser look
  color: #6200ea;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Content = styled.div`
  max-width: 60%; // Increased max-width for a denser look
  font-size: 1.4rem; // Increased font size for a denser look
  line-height: 1.6; // Increased line height for a denser look
  text-align: justify; // Justify text to take more space
`;

const AboutUs = () => (
  <AboutSection id="about-us">
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
