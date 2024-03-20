// import React from "react";
// import styled from "styled-components";

// const ContactSection = styled.section`
//   display: flex;
//   flex-direction: column; // Stack title, form and image vertically
//   align-items: center; // Center children horizontally
//   padding: 0 50px 50px 50px; // Add some padding around the section
//   background-color: #f0f0f0;
// `;

// const TitleContainer = styled.div`
//   width: 100%; // Take full width
//   display: flex;
//   justify-content: center; // Center title horizontally
//   align-items: center; // Center title vertically
//   margin-bottom: 10px; // Space between title and the form + image
// `;

// const ContactTitle = styled.h2`
//   font-size: 60px;
//   font-weight: bold;
//   color: #333;
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%; // Full width to hold form and image side by side
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 50%; // Adjust based on your layout preferences
//   padding: 20px; // Add some padding around the form
// `;

// const Input = styled.input`
//   padding: 10px;
//   margin-bottom: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const TextArea = styled.textarea`
//   padding: 10px;
//   margin-bottom: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   resize: none;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #000;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #333;
//   }
// `;

// const ImageWrapper = styled.div`
//   width: 40%; // Adjust based on your layout preferences
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Image = styled.img`
//   max-width: 90%;
//   height: auto;
// `;

// const ContactUs = () => {
//   return (
//     <ContactSection>
//       <TitleContainer>
//         <ContactTitle>Contact Us</ContactTitle>
//       </TitleContainer>
//       <ContentWrapper>
//         <Form>
//           <Input type="text" placeholder="Name" />
//           <Input type="number" placeholder="Phone Number*" />
//           <Input type="email" placeholder="E-mail*" />
//           <Input type="text" placeholder="Interested In" />
//           <TextArea rows="4" placeholder="Message*"></TextArea>
//           <Button type="submit">SEND EMAIL →</Button>
//         </Form>
//         <ImageWrapper>
//           <Image src="/images/contact-us.png" alt="Contact" />
//         </ImageWrapper>
//       </ContentWrapper>
//     </ContactSection>
//   );
// };

// export default ContactUs;

import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  display: flex;
  flex-direction: column; // Stack title, form and image vertically
  align-items: center; // Center children horizontally
  padding: 0 50px 50px 50px; // Add some padding around the section
  background-color: #f0f0f0;
`;

const TitleContainer = styled.div`
  width: 100%; // Take full width
  display: flex;
  justify-content: center; // Center title horizontally
  align-items: center; // Center title vertically
  margin-bottom: 10px; // Space between title and the form + image
`;

const ContactTitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: #333;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; // Full width to hold form and image side by side
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%; // Adjust based on your layout preferences
  padding: 20px; // Add some padding around the form
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
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
`;

const ImageWrapper = styled.div`
  width: 40%; // Adjust based on your layout preferences
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 90%;
  height: auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
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
