import React from "react";
import styled from "styled-components";

const IntroSection = styled.section`
  padding: 10px 10px 75px 50px;
  background-color: #f0f0f0;
  text-align: center;
  padding-top: 102px;
  margin-top: -102px;

  @media (max-width: 480px) {
    padding-top: 335px;
    margin-top: -335px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 70px;
  font-size: 60px;
  font-weight: bold;
  color: #333;

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 40px;
  align-items: center;
  justify-items: center;

  @media (max-width: 480px) {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const IconLabel = styled.div`
  text-align: center;
  margin-top: 20px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const Introduction = () => (
  <IntroSection id="renewable-energy-intro">
    <SectionTitle>
      Introduction to <br /> Renewable Energy Systems
    </SectionTitle>{" "}
    <IconsGrid>
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
