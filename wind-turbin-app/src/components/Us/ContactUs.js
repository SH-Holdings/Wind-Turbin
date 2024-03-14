import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #f0f0f0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%; // Adjust based on your layout
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px; // Space between input fields
  border: 1px solid #ccc; // Light grey border
  border-radius: 5px; // Rounded corners
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px; // Space between textarea and button
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none; // Disable resizing
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #000; // Dark background for the button
  color: #fff; // White text
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333; // Slightly lighter on hover
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 90%;
  height: auto;
`;

const ContactUs = () => {
  return (
    <ContactSection>
      <Form>
        <h2>Contact Us</h2>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Phone Number*" />
        <Input type="email" placeholder="E-mail*" />
        <Input type="text" placeholder="Interested In" />
        <TextArea rows="4" placeholder="Message*"></TextArea>
        <Button type="submit">SEND EMAIL →</Button>
      </Form>
      <ImageWrapper>
        <Image src="/images/contact-us.png" alt="Contact" />
      </ImageWrapper>
    </ContactSection>
  );
};

export default ContactUs;
