import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #333;
  color: #fff;
  align-items: center;
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align items to the start
`;

const FooterTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterSocialIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #6200ea;
  }
`;

const CopyRightText = styled.p`
  align-self: center;
  font-size: 0.5rem;
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 10%;
`;

const LogoImage = styled.img`
  height: auto; // Maintain aspect ratio
  width: 30%; // The image will take up the full width of the FooterLogo div
  margin-bottom: 1rem; // Optional: Adds space between the logo and the following content
  background-color: #333;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <LogoImage src="/images/logo.png" alt="Digital Project Logo" />
      </FooterLogo>
      <FooterSection>
        <FooterTitle>Information</FooterTitle>
        <FooterLink href="#">Main</FooterLink>
        <FooterLink href="#">Gallery</FooterLink>
        <FooterLink href="#">Projects</FooterLink>
        <FooterLink href="#">Certifications</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Contact Information</FooterTitle>
        <FooterLink href="#">AUI MAILBOX</FooterLink>
        <FooterLink href="#">+212 658-907-291</FooterLink>
        <FooterLink href="mailto:j.bouabid@aui.ma">j.bouabid@aui.ma</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Social Media</FooterTitle>
        <div>
          <FooterSocialIcon icon={faFacebook} />
          <FooterSocialIcon icon={faTwitter} />
          <FooterSocialIcon icon={faLinkedin} />
          <FooterSocialIcon icon={faInstagram} />
        </div>
      </FooterSection>
      <CopyRightText>© 2024 All Rights Reserved</CopyRightText>
    </FooterContainer>
  );
};

export default Footer;
