import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem; // Adjusted padding for a tighter footer
  background-color: #333;
  color: #fff;
`;

const FooterTitle = styled.h4`
  font-size: 1rem; // Uniform font size for all titles
  margin-bottom: 0.5rem; // Less margin for a more compact look
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.25rem; // Smaller space between links
  font-size: 0.85rem; // Slightly larger font size for better readability
  &:hover {
    text-decoration: underline;
  }
`;

const FooterSocialIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  &:hover {
    color: #6200ea;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center the logo
`;

const LogoImage = styled.img`
  width: 80px; // Adjust the logo width as needed
  margin-bottom: 1rem; // Space between logo and copyright text
`;

const CopyRightText = styled.p`
  font-size: 0.75rem; // Slightly larger font for readability
  margin-top: 1rem; // Space between sections and copyright text
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Centers the items
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center; // Centers the icons horizontally
  padding: 1rem 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoImage src="/images/logo.png" alt="Digital Project Logo" />
        <CopyRightText>© 2024 All Rights Reserved</CopyRightText>
      </LogoContainer>
      <FooterSection>
        <FooterTitle>Information</FooterTitle>
        <FooterLink href="#">Main</FooterLink>
        <FooterLink href="#">Gallery</FooterLink>
        <FooterLink href="#">Projects</FooterLink>
        <FooterLink href="#">Certifications</FooterLink>{" "}
      </FooterSection>
      <FooterSection>
        <FooterTitle>Contact</FooterTitle>
        <FooterLink href="#">AUI MAILBOX</FooterLink>
        <FooterLink href="mailto:j.bouabid@aui.ma">j.bouabid@aui.ma</FooterLink>
        <FooterLink href="#">+212 658-907-291</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Social Media</FooterTitle>
        <SocialMediaContainer>
          <FooterSocialIcon icon={faFacebookF} />
          <FooterSocialIcon icon={faTwitter} />
          <FooterSocialIcon icon={faLinkedinIn} />
          <FooterSocialIcon icon={faInstagram} />
        </SocialMediaContainer>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
