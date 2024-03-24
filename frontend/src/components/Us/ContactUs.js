import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px 50px 50px;
  background-color: #f0f0f0;
  padding-top: 102px;
  margin-top: -102px;

  @media (max-width: 480px) {
    padding: 20px;
    padding-top: 60px;
    margin-top: -60px;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    margin-bottom: 5px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: #333;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    width: 80%;
    margin-top: 20px;
  }
`;

const Image = styled.img`
  max-width: 90%;
  height: auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const RequiredAsterisk = styled.span`
  color: red;
`;

const ContactUs = () => {
  return (
    <ContactSection id="contact-us">
      <TitleContainer>
        <ContactTitle>Contact Us</ContactTitle>
      </TitleContainer>
      <ContentWrapper>
        <Form>
          <Label>Name</Label>
          <Input type="text" placeholder="Name" />

          <Label>
            Phone Number<RequiredAsterisk>*</RequiredAsterisk>
          </Label>
          <Input type="number" placeholder="Phone Number" />

          <Label>
            E-mail<RequiredAsterisk>*</RequiredAsterisk>
          </Label>
          <Input type="email" placeholder="E-mail" />

          <Label>Interested In</Label>
          <Input type="text" placeholder="Interested In" />

          <Label>
            Message<RequiredAsterisk>*</RequiredAsterisk>
          </Label>
          <TextArea rows="4" placeholder="Message"></TextArea>

          <Button type="submit">SEND EMAIL →</Button>
        </Form>
        <ImageWrapper>
          <Image src="/images/contact-us.png" alt="Contact" />
        </ImageWrapper>
      </ContentWrapper>
    </ContactSection>
  );
};

export default ContactUs;
