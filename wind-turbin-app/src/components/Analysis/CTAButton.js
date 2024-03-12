import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Button = styled.button`
  cursor: pointer;
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background-color: #7b2ff7;
  }
`;

const CTAButton = ({ to }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // Use navigate function to change routes
  };

  return <Button onClick={handleClick}>Click Here to Launch</Button>;
};

export default CTAButton;
