import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
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

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;

  &:hover {
    color: #6200ea;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    font-size: 2rem;
    cursor: pointer;
  }
`;
const Logo = styled.img`
  height: 75px;
  cursor: pointer;
  background-color: #ffffff;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
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
      <NavLinks isOpen={isOpen}>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">SLM Analysis</NavLink>
        <NavLink href="#">Simulations</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
