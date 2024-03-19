import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const InputGroupContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  margin: 10px 0;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  flex-grow: 1;
  margin-right: 10px;
`;

const HelpIcon = styled(FontAwesomeIcon)`
  color: #ccc;
  cursor: pointer;
`;

const InputGroup = ({ label, placeholder }) => (
  <InputGroupContainer>
    <Label>{label}</Label>
    <Input type="text" placeholder={placeholder} />
    <HelpIcon icon={faQuestionCircle} />
  </InputGroupContainer>
);

const SimpleLoadModelInput = () => {
  return (
    <div>
      <InputGroup label="Reference Wind Speed" placeholder="Enter Value" />
      <InputGroup
        label="Average Wind Speed"
        placeholder="Type something here..."
      />
      <InputGroup
        label="Number of Blades"
        placeholder="Type something here..."
      />
      <InputGroup
        label="Blade Tip Radius"
        placeholder="Type something here..."
      />
      <InputGroup
        label="Total Platform Area of the Blade"
        placeholder="Input Text"
      />
      <InputGroup label="Maximum Rotor Speed" placeholder="Input Text" />
    </div>
  );
};

export default SimpleLoadModelInput;
