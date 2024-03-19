import React from "react";
import styled from "styled-components";
import { FaQuestionCircle } from "react-icons/fa";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 32px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 960px; // Adjust the max-width as needed
  margin: 32px auto;
`;

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 2px solid #e6e6e6;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 30px; // Add padding to prevent text from overlapping with the icon
  font-size: 0.9rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  flex-grow: 1; // Make the input field take up the remaining space

  &:hover {
    border-color: #c0c0c0;
  }

  &:focus {
    outline: none;
    border-color: #6200ea;
    box-shadow: 0 0 0 2px rgba(98, 0, 234, 0.2);
  }
`;

const Icon = styled(FaQuestionCircle)`
  position: absolute;
  right: 10px;
  top: calc(50% - 0.5em);
  color: #666;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 250px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%; // Position the tooltip above the icon
  left: 50%;
  margin-left: -125px; // Shift the tooltip to the left by half its width to center it
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.75rem;

  &::after {
    content: "";
    position: absolute;
    top: 100%; // Arrow is just below the tooltip box
    left: 50%; // Center arrow horizontally in the tooltip
    margin-left: -5px; // Shift arrow to the left by half its width
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

// const TooltipText = styled.span`
//   visibility: hidden;
//   width: 250px;
//   background-color: #555;
//   color: #fff;
//   text-align: justify;
//   border-radius: 6px;
//   padding: 5px 0;
//   position: absolute;
//   z-index: 1;
//   bottom: 125%;
//   left: 50%;
//   margin-left: -75px;
//   opacity: 0;
//   transition: opacity 0.3s;
//   font-size: 0.75rem;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 100%;
//     left: 25%;
//     margin-left: -5px;
//     border-width: 5px;
//     border-style: solid;
//     border-color: #555 transparent transparent transparent;
//   }
// `;

// const Tooltip = styled.div`
//   position: relative;
//   display: inline-block;

//   &:hover ${TooltipText} {
//     visibility: visible;
//     opacity: 1;
//   }
// `;

const SimpleLoadModelInput = () => {
  return (
    <Container>
      <InputGroup>
        <Label htmlFor="refWindSpeed">Reference Wind Speed</Label>
        <InputContainer>
          <Input id="refWindSpeed" type="text" placeholder="Measured in m/s" />
          <Tooltip>
            <Icon />
            <TooltipText>
              The baseline wind speed used to compare or reference performance.
            </TooltipText>
          </Tooltip>
        </InputContainer>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="avgWindSpeed">Average Wind Speed</Label>
        <InputContainer>
          <Input id="avgWindSpeed" type="text" placeholder="Measured in m/s" />
          <Tooltip>
            <Icon />
            <TooltipText>
              The mean wind speed over a specified period of time.
            </TooltipText>
          </Tooltip>
        </InputContainer>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="numBlades">Number of Blades</Label>
        <InputContainer>
          <Input id="numBlades" type="number" placeholder="Typically 3" />
          <Tooltip>
            <Icon />
            <TooltipText>
              Number of blades on the wind turbine. More blades can increase
              torque but may reduce speed.
            </TooltipText>
          </Tooltip>
        </InputContainer>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="bladeRadius">Blade Tip Radius</Label>
        <InputContainer>
          <Input
            id="bladeRadius"
            type="text"
            placeholder="Measured in meters"
          />
          <Tooltip>
            <Icon />
            <TooltipText>
              Distance from the center of the rotor to the tip of the blade.
            </TooltipText>
          </Tooltip>
        </InputContainer>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="platformArea">Total Platform Area of the Blade</Label>
        <InputContainer>
          <Input
            id="platformArea"
            type="text"
            placeholder="Measured in square meters"
          />
          <Tooltip>
            <Icon />
            <TooltipText>
              The entire area of the rotor that interacts with the wind.
            </TooltipText>
          </Tooltip>
        </InputContainer>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="rotorSpeed">Maximum Rotor Speed</Label>
        <InputContainer>
          <Input id="rotorSpeed" type="text" placeholder="Measured in RPM" />
          <Tooltip>
            <Icon />
            <TooltipText>
              The maximum revolutions per minute of the rotor under optimal
              conditions.
            </TooltipText>
          </Tooltip>
        </InputContainer>
      </InputGroup>

      {/* Include additional InputGroups for other parameters as needed */}
    </Container>
  );
};

export default SimpleLoadModelInput;
