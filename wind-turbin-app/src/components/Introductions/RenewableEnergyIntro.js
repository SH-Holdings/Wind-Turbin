import React from "react";
import styled from "styled-components";

const IntroSection = styled.section`
  padding: 50px;
  background-color: #f0f0f0; // Light background color to differentiate the section
  text-align: center; // Center-align text for a cohesive look
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 20px; // Adds spacing between the title and the icons
`;

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(100px, 1fr)
  ); // Creates a responsive grid
  gap: 20px; // Spacing between grid items
  align-items: center;
  justify-items: center;
`;

const Icon = styled.img`
  width: 80px; // Icon size
  height: 80px; // Maintains aspect ratio
`;

const IconLabel = styled.div`
  text-align: center;
  margin-top: 10px; // Spacing between the icon and its label
`;

// Assuming you have icons stored in your public directory or imported
const Introduction = () => (
  <IntroSection>
    <SectionTitle>Introduction to Renewable Energy Systems</SectionTitle>
    <IconsGrid>
      {/* Repeat for each energy type */}
      <div>
        <Icon src="/images/wind-icon.png" alt="Wind" />
        <IconLabel>Wind</IconLabel>
      </div>
      <div>
        <Icon src="/images/solar-icon.png" alt="Solar" />
        <IconLabel>Solar</IconLabel>
      </div>
      <div>
        <Icon src="/images/biomass-icon.png" alt="Biomass" />
        <IconLabel>Biomass</IconLabel>
      </div>
      <div>
        <Icon src="/images/geothermal-icon.png" alt="Geothermal" />
        <IconLabel>Geothermal</IconLabel>
      </div>
      <div>
        <Icon src="/images/ocean-icon.png" alt="Ocean" />
        <IconLabel>Ocean</IconLabel>
      </div>
      <div>
        <Icon src="/images/hydropower-icon.png" alt="Hydropower" />
        <IconLabel>Hydropower</IconLabel>
      </div>
    </IconsGrid>
  </IntroSection>
);

export default Introduction;
