import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column; // Stack content vertically
  align-items: center; // Center content horizontally
  padding: 10px 10px 40px 50px;
  background-color: #f0f0f0; // Matching background color from the screenshot
  text-align: center; // Center-align text for a cohesive look
`;

const Title = styled.h2`
  font-size: 60px; // Increased font size for a bigger title
  font-weight: bold;
  color: #333; // Adjust text color to fit your design
  margin: 0 0 20px 0; // Increased margin to space out title from content
`;

const LaunchButton = styled.button`
  cursor: pointer;
  background-color: #6200ea; // Original purple color
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-flex; // Use inline-flex to center button icon and text inline
  align-items: center;
  gap: 10px; // Space between icon and text
  margin-top: 30px; // Increased margin for a denser look
  &:hover {
    background-color: #7b2ff7; // Darken on hover
  }
`;

const Content = styled.div`
  max-width: 60%; // Increased max-width for a denser look
  font-size: 1.4rem; // Increased font size for a denser look
  line-height: 1.6; // Increased line height for a denser look
  text-align: justify; // Justify text to take more space
`;

const SimpleLoadModel = () => {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/simple-load-model-input");
  };

  return (
    <Section>
      <Title>Simple Load Model</Title>
      <Content>
        <p>
          The simple load model in IEC 61400-2 simplifies the complex wind
          turbine loads into equivalent aerodynamic, gravitational, and inertial
          forces. Aerodynamic loads, calculated using methods like blade element
          momentum theory, account for wind flow over the blades, while gravity
          loads represent the weight of turbine components. Inertial loads
          consider dynamic responses to changing conditions. This model provides
          a practical framework for assessing wind turbine loads under various
          environmental conditions, aiding in design and performance evaluation.
        </p>
        <p>
          At the heart of this model are three primary types of forces:
          aerodynamic, gravitational, and inertial loads. Each type plays a
          critical role in influencing the structural integrity and performance
          of the wind turbine.
        </p>
        <p>
          By synthesizing these diverse forces into a unified framework, the
          simple load model provides a practical tool for assessing the load
          characteristics of wind turbines under a wide range of environmental
          conditions. This, in turn, aids in the design and performance
          evaluation of turbines, ensuring they are both efficient and
          resilient. Whether for small-scale installations or large wind farms,
          the insights gained from this model are invaluable for optimizing
          design, enhancing performance, and extending the operational life of
          wind turbines.
        </p>
        <LaunchButton onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faPlay} />
          Click Here to Launch
        </LaunchButton>
      </Content>
    </Section>
  );
};

export default SimpleLoadModel;
