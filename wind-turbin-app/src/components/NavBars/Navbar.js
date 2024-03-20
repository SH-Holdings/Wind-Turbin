import React, { useState } from "react";
import styled, { css } from "styled-components";

const Nav = styled.nav`
  position: sticky; //
  top: 0; //
  z-index: 100; //  to ensure navbar is above other elements
  background-color: #fff; // Add a background color to make the navbar visible
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const sharedLinkStyles = css`
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #6200ea;
    transform: scale(1.1);
  }
`;

const NavLink = styled.a`
  ${sharedLinkStyles}

  ${({ isActive }) =>
    isActive &&
    css`
      position: relative;
      font-weight: bold;

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 2px; // Adjusted for visibility
        background-color: #6200ea;
      }

      &::before {
        top: -10px;
      }

      &::after {
        bottom: -10px;
      }
    `}
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

const Logo = styled.img`
  height: 70px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo src="/images/logo.png" alt="Logo" />
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖️" : "☰"}
      </MobileIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink href="#hero" isActive={activeSection === "hero"}>
          Home
        </NavLink>
        <NavLink href="#about-us" isActive={activeSection === "about-us"}>
          About Us
        </NavLink>
        <NavLink
          href="#renewable-energy-intro"
          isActive={activeSection === "renewable-energy-intro"}
        >
          Introduction to Renewable Energy
        </NavLink>
        <NavLink
          href="#slm-analysis"
          isActive={activeSection === "slm-analysis"}
        >
          SLM Analysis
        </NavLink>
        <NavLink href="#contact-us" isActive={activeSection === "contact-us"}>
          Contact Us
        </NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
