import React, { useState } from "react";
import styled, { css } from "styled-components";

const Nav = styled.nav`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Enhanced shadow for depth
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); // Slightly deeper shadow on hover for dynamic effect
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const sharedLinkStyles = css`
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #6200ea;
    transform: scale(1.1); // Slightly enlarge on hover for visual feedback
  }
`;

const NavLink = styled.a`
  ${sharedLinkStyles}
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block; // Adjusted for clarity
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(90deg); // Rotate for interactive feedback
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

// Special styling for the "Home" link with bars above and below
const HomeLink = styled(NavLink)`
  position: relative;
  font-weight: bold;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 0.55px;
    background-color: #6200ea;
  }

  &::before {
    top: -5px;
  }

  &::after {
    bottom: -5px;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      {/* Reference the logo image using its path from the public directory */}
      <Logo src="/images/logo.png" alt="Logo" />
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖️" : "☰"}
      </MobileIcon>
      <NavLink isOpen={isOpen}>
        <HomeLink href="#">Home</HomeLink>
        <NavLink href="#">SLM Analysis</NavLink>
        <NavLink href="#">Simulations</NavLink>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Contact Us</NavLink>
      </NavLink>
    </Nav>
  );
}

export default Navbar;
