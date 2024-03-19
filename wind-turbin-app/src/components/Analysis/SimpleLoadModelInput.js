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

const SimpleLoadModelInput = () => {
  return (
    <Container>
      <InputGroup>
        <Label htmlFor="refWindSpeed">Reference Wind Speed</Label>
        <InputContainer>
          <Input id="refWindSpeed" type="text" placeholder="Measured in m/s" />
          <Icon />
        </InputContainer>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="avgWindSpeed">Average Wind Speed</Label>
        <InputContainer>
          <Input id="avgWindSpeed" type="text" placeholder="Measured in m/s" />
          <Icon />
        </InputContainer>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="numBlades">Number of Blades</Label>
        <InputContainer>
          <Input
            id="numBlades"
            type="number"
            placeholder="Enter number, typically 3 or 5"
          />
          <Icon />
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
          <Icon />
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
          <Icon />
        </InputContainer>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="rotorSpeed">Maximum Rotor Speed</Label>
        <InputContainer>
          <Input id="rotorSpeed" type="text" placeholder="Measured in RPM" />
          <Icon />
        </InputContainer>
      </InputGroup>
    </Container>
  );
};

export default SimpleLoadModelInput;
