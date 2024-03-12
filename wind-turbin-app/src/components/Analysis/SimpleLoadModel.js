import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  display: flex;
  flex-direction: column; // Keep content stacked vertically
  align-items: center; // Center content horizontally
  padding: 50px 20px; // Adjust padding as necessary
  background-color: #f0f0f0; // Matching background color from the screenshot
  text-align: center; // Center-align text for a cohesive look
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #333; // Adjust text color to fit your design
  margin: 0 0 20px 0; // Adjust margin to space out title from content
`;

const Text = styled.p`
  max-width: 60%; // Limits the width of the content for readability
`;

const LaunchButton = styled.button`
  cursor: pointer;
  background-color: #6200ea; // Original purple color
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px; // Space between the text and the button
  display: inline-flex; // Use inline-flex to center button icon and text inline
  align-items: center;
  gap: 10px; // Space between icon and text

  &:hover {
    background-color: #7b2ff7; // Darken on hover
  }
`;

const SimpleLoadModel = () => {
  const handleButtonClick = () => {
    console.log("Navigate to the new page (to be implemented)");
  };

  return (
    <Section>
      <Title>Simple Load Model</Title>
      <Text>
        The simple load model in IEC 61400-2 simplifies the complex wind turbine
        loads into equivalent aerodynamic, gravitational, and inertial forces.
        Aerodynamic loads, calculated using methods like blade element momentum
        theory, account for wind flow over the blades, while gravity loads
        represent the weight of turbine components. Inertial loads consider
        dynamic responses to changing conditions. This model provides a
        practical framework for assessing wind turbine loads under various
        environmental conditions, aiding in design and performance evaluation.
      </Text>
      <LaunchButton onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faPlay} />
        Click Here to Launch
      </LaunchButton>
    </Section>
  );
};

export default SimpleLoadModel;
