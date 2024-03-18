// import React from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faLinkedin,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const FooterContainer = styled.footer`
//   display: flex;
//   justify-content: space-between;
//   padding: 2rem;
//   background-color: #333;
//   color: #fff;
//   align-items: center;
// `;
// const FooterSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start; // Align items to the start
// `;

// const FooterTitle = styled.h4`
//   font-size: 1.25rem;
//   margin-bottom: 1rem;
// `;

// const FooterLink = styled.a`
//   color: #fff;
//   text-decoration: none;
//   margin-bottom: 0.5rem;
//   text-align: left; // Align the text to the left
//   font-size: 0.8rem;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const FooterSocialIcon = styled(FontAwesomeIcon)`
//   font-size: 1rem;
//   margin-right: 0.5rem;
//   cursor: pointer;

//   &:hover {
//     color: #6200ea;
//   }
// `;

// const CopyRightText = styled.p`
//   align-self: center;
//   font-size: 0.5rem;
// `;

// const FooterLogo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   max-width: 10%;
// `;

// const LogoImage = styled.img`
//   height: auto; // Maintain aspect ratio
//   width: 30%; // The image will take up the full width of the FooterLogo div
//   margin-bottom: 1rem; // Optional: Adds space between the logo and the following content
//   background-color: #333;
//   align-self: center;
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterLogo>
//         <LogoImage src="/images/logo.png" alt="Digital Project Logo" />
//       </FooterLogo>
//       <FooterSection>
//         <FooterTitle>Information</FooterTitle>
//         <FooterLink href="#">Main</FooterLink>
//         <FooterLink href="#">Gallery</FooterLink>
//         <FooterLink href="#">Projects</FooterLink>
//         <FooterLink href="#">Certifications</FooterLink>
//       </FooterSection>
//       <FooterSection>
//         <FooterTitle>Contact Information</FooterTitle>
//         <FooterLink href="#">AUI MAILBOX</FooterLink>
//         <FooterLink href="#">+212 658-907-291</FooterLink>
//         <FooterLink href="mailto:j.bouabid@aui.ma">j.bouabid@aui.ma</FooterLink>
//       </FooterSection>
//       <FooterSection>
//         <FooterTitle>Social Media</FooterTitle>
//         <div>
//           <FooterSocialIcon icon={faFacebook} />
//           <FooterSocialIcon icon={faTwitter} />
//           <FooterSocialIcon icon={faLinkedin} />
//           <FooterSocialIcon icon={faInstagram} />
//         </div>
//       </FooterSection>
//       <CopyRightText>© 2024 All Rights Reserved</CopyRightText>
//     </FooterContainer>
//   );
// };
// export default Footer;

// import React from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faLinkedin,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const FooterContainer = styled.footer`
//   display: flex;
//   align-items: center;
//   padding: 2rem;
//   background-color: #333;
//   color: #fff;
// `;

// const FooterContent = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
// `;

// const FooterSection = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const FooterTitle = styled.h4`
//   font-size: 1.25rem;
//   margin: 0 0 1rem 0;
// `;

// const FooterLink = styled.a`
//   color: #fff;
//   text-decoration: none;
//   margin-bottom: 0.5rem;
//   font-size: 0.8rem;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const FooterSocialIcons = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 1rem; // Adjust as needed to align with titles
// `;

// const FooterSocialIcon = styled(FontAwesomeIcon)`
//   font-size: 1.5rem; // Adjust the size as needed
//   margin-right: 0.5rem;
//   cursor: pointer;
//   &:hover {
//     color: #6200ea;
//   }
// `;

// const CopyRightText = styled.p`
//   font-size: 0.75rem;
//   margin-left: 2rem; // Added margin to align with the rest of the content
// `;

// // const LogoImage = styled.img`
// //   height: auto; // Maintain aspect ratio
// //   width: 3%; // The image will take up the full width of the FooterLogo div
// //   margin-bottom: 1rem; // Optional: Adds space between the logo and the following content
// //   background-color: #333;
// // `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterContent>
//         <FooterSection>
//   <FooterTitle>Information</FooterTitle>
//   <FooterLink href="#">Main</FooterLink>
//   <FooterLink href="#">Gallery</FooterLink>
//   <FooterLink href="#">Projects</FooterLink>
//   <FooterLink href="#">Certifications</FooterLink>
//         </FooterSection>
//         <FooterSection>
//   <FooterTitle>Contact Information</FooterTitle>
//   <FooterLink href="#">AUI MAILBOX</FooterLink>
//   <FooterLink href="#">+212 658-907-291</FooterLink>
//   <FooterLink href="mailto:j.bouabid@aui.ma">
//     j.bouabid@aui.ma
//   </FooterLink>{" "}
//         </FooterSection>
//         <FooterSection>
//           <FooterTitle>Social Media</FooterTitle>
//           <FooterSocialIcons>
//             <FooterSocialIcon icon={faFacebook} />
//             <FooterSocialIcon icon={faTwitter} />
//             <FooterSocialIcon icon={faLinkedin} />
//             <FooterSocialIcon icon={faInstagram} />
//           </FooterSocialIcons>
//         </FooterSection>
//       </FooterContent>
//       <CopyRightText>© 2024 All Rights Reserved</CopyRightText>
//     </FooterContainer>
//   );
// };
// export default Footer;

// import React from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedinIn,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const FooterContainer = styled.footer`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem; // Adjusted padding for a tighter footer
//   background-color: #333;
//   color: #fff;
// `;

// const FooterSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start; // Ensures text alignment to the left
// `;

// const FooterTitle = styled.h4`
//   font-size: 1rem; // Smaller font size for titles
//   margin-bottom: 0.5rem; // Less margin for a more compact look
// `;

// const FooterLink = styled.a`
//   color: #fff;
//   text-decoration: none;
//   margin-bottom: 0.25rem; // Smaller space between links
//   font-size: 0.85rem; // Slightly larger font size for better readability
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SocialMediaContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center; // Centers social media icons
// `;

// const FooterSocialIcon = styled(FontAwesomeIcon)`
//   font-size: 1.25rem; // Larger icons for better visibility
//   margin: 0 0.5rem; // Evenly spaced horizontal margin
//   cursor: pointer;
//   &:hover {
//     color: #6200ea;
//   }
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center; // Center the logo
// `;

// const LogoImage = styled.img`
//   width: 80px; // Adjust the logo width as needed
//   margin-bottom: 1rem; // Space between logo and copyright text
// `;

// const CopyRightText = styled.p`
//   font-size: 0.6rem; // Slightly larger font for readability
//   margin-top: 1rem; // Space between sections and copyright text
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <LogoContainer>
//         <LogoImage src="/images/logo.png" alt="Digital Project Logo" />
//         <CopyRightText>© 2024 All Rights Reserved</CopyRightText>
//       </LogoContainer>
//       <FooterSection>
//         <FooterTitle>Information</FooterTitle>
//         <FooterLink href="#">Main</FooterLink>
//         <FooterLink href="#">Gallery</FooterLink>
//         <FooterLink href="#">Projects</FooterLink>
//         <FooterLink href="#">Certifications</FooterLink>{" "}
//       </FooterSection>
//       <FooterSection>
//         <FooterTitle>Contact</FooterTitle>
//         <FooterLink href="#">AUI MAILBOX</FooterLink>
//         <FooterLink href="#">+212 658-907-291</FooterLink>
//         <FooterLink href="mailto:j.bouabid@aui.ma">
//           j.bouabid@aui.ma
//         </FooterLink>{" "}
//       </FooterSection>
//       <SocialMediaContainer>
//         <FooterTitle>Social Media</FooterTitle>
//         <FooterSocialIcon icon={faFacebookF} />
//         <FooterSocialIcon icon={faTwitter} />
//         <FooterSocialIcon icon={faLinkedinIn} />
//         <FooterSocialIcon icon={faInstagram} />
//       </SocialMediaContainer>
//     </FooterContainer>
//   );
// };

// export default Footer;

// 3JB HABIB
// import React from "react";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedinIn,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// const FooterContainer = styled.footer`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem; // Adjusted padding for a tighter footer
//   background-color: #333;
//   color: #fff;
// `;

// const FooterSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start; // Ensures text alignment to the left
// `;

// const FooterLink = styled.a`
//   color: #fff;
//   text-decoration: none;
//   margin-bottom: 0.25rem; // Smaller space between links
//   font-size: 0.85rem; // Slightly larger font size for better readability
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const FooterSocialIcon = styled(FontAwesomeIcon)`
//   font-size: 1.25rem; // Larger icons for better visibility
//   margin: 0 0.5rem; // Evenly spaced horizontal margin
//   cursor: pointer;
//   &:hover {
//     color: #6200ea;
//   }
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center; // Center the logo
// `;

// const LogoImage = styled.img`
//   width: 80px; // Adjust the logo width as needed
//   margin-bottom: 1rem; // Space between logo and copyright text
// `;

// const CopyRightText = styled.p`
//   font-size: 0.6rem; // Slightly larger font for readability
//   margin-top: 1rem; // Space between sections and copyright text
// `;

// const FooterTitle = styled.h4`
//   font-size: 1rem; // Same font size for all titles
//   margin-bottom: 0.5rem; // Same margin for all titles
//   min-height: 1.5rem; // Ensures all titles have the same height
// `;

// const SocialMediaContainer = styled.div`
//   display: flex;
//   flex-direction: column; // Aligns the icons vertically
//   align-items: center;
//   justify-content: center; // Centers social media icons
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <LogoContainer>
//         <LogoImage src="/images/logo.png" alt="Digital Project Logo" />
//         <CopyRightText>© 2024 All Rights Reserved</CopyRightText>
//       </LogoContainer>
//       <FooterSection>
// <FooterTitle>Information</FooterTitle>
// <FooterLink href="#">Main</FooterLink>
// <FooterLink href="#">Gallery</FooterLink>
// <FooterLink href="#">Projects</FooterLink>
// <FooterLink href="#">Certifications</FooterLink>{" "}
//       </FooterSection>
//       <FooterSection>
//         <FooterTitle>Contact</FooterTitle>
// <FooterLink href="#">AUI MAILBOX</FooterLink>
// <FooterLink href="#">+212 658-907-291</FooterLink>
// <FooterLink href="mailto:j.bouabid@aui.ma">
//   j.bouabid@aui.ma
// </FooterLink>{" "}
//       </FooterSection>
//       <FooterSection>
//         <FooterTitle>Social Media</FooterTitle>
//         <SocialMediaContainer>
//           <FooterSocialIcon icon={faFacebookF} />
//           <FooterSocialIcon icon={faTwitter} />
//           <FooterSocialIcon icon={faLinkedinIn} />
//           <FooterSocialIcon icon={faInstagram} />
//         </SocialMediaContainer>
//       </FooterSection>
//     </FooterContainer>
//   );
// };

// export default Footer;
