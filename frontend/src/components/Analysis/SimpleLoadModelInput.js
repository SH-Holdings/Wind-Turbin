import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FaQuestionCircle } from "react-icons/fa";
import jsPDF from "jspdf";
import Navbar from "../NavBars/Navbar";
import Footer from "../Footers/Footer";

const Title = styled.h1`
  color: #333;
  font-size: 3.5em;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 2px; /* Slightly more spaced out for elegance */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 0;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 40px;

  /* Gradient text effect */
  background: -webkit-linear-gradient(45deg, #6200ea, #ff0078);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Subtle scale animation to draw attention */
  animation: scaleUp 1.5s infinite alternate;

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }

  @media (max-width: 480px) {
    font-size: 2em; // Smaller font size for phone view
    /* Adjust other properties as needed for smaller screens */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 960px;
  margin: 32px auto;

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%; // Make sure the group takes the full width

  @media (min-width: 480px) {
    gap: 8px; // Reduce the gap between inputs
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%; // Ensure the container takes full width of its parent
`;

const Input = styled.input`
  border: 2px solid #e6e6e6;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 30px;
  font-size: 0.9rem;
  width: 100%; // Ensure the input takes the full width

  @media (min-width: 480px) {
    font-size: 0.6rem; // Smaller font size for phone view inputs
    padding: 8px; // Reduce padding
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-weight: bold;
    font-size: 1rem; // Increase font size for phone view
    margin-top: 20px;
  }
`;

const Icon = styled(FaQuestionCircle)`
  position: absolute;
  right: 10px;
  top: calc(50% - 0.5em);
  color: #666;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 250px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -125px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.75rem;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  @media (max-width: 480px) {
    font-size: 0.4rem; // Smaller font size for tooltips on phone view

`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

const GenerateButton = styled.button`
  grid-column: span 3;
  justify-self: end;
  background-color: #6200ea;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s;
  margin-top: 1px;

  &:hover {
    background-color: #3700b3;
  }

  @media (max-width: 480px) {
    justify-self: center; // Center the button
    margin-top: 30px;
  }
`;

const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  z-index: 1; // Set z-index to 0 to ensure the video is in the background
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const SimpleLoadModelInput = () => {
  const inputRef = React.useRef();
  const [isPhoneView, setIsPhoneView] = useState(window.innerWidth <= 480);

  const mainContainerRef = useRef();

  useEffect(() => {
    const footerHeight = document.querySelector("footer").offsetHeight;
    if (mainContainerRef.current) {
      mainContainerRef.current.style.paddingBottom = `${footerHeight}px`;
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneView(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const NumberInput = (props) => (
    <Input
      type="number"
      min="0"
      onChange={(e) => {
        if (e.target.value < 0) e.target.value = 0;
      }}
      {...props}
    />
  );
  const generatePDF = async () => {
    const inputs = Array.from(inputRef.current.getElementsByTagName("input"));

    // Function to check and add a new page if needed
    const checkAndAddPageIfNeeded = (currentY, pdf) => {
      const pageHeight = pdf.internal.pageSize.height;
      if (currentY > pageHeight - 10) {
        pdf.addPage();
        return 10; // Reset Y to the top of the new page
      }
      return currentY;
    };

    // Collect Form Data
    const formData = {};
    inputs.forEach((input) => {
      formData[input.id] = input.value;
    });

    try {
      // Send Data to API
      const response = await fetch(
        "http://localhost:8000/api/calculate_loads/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
      }

      const data = await response.json(); // API processes data

      // Initialize PDF
      const pdf = new jsPDF();
      let currentY = 10;

      // Report Title: bold and center
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(18);
      pdf.text("Engineering Analysis Report", 105, currentY, {
        align: "center",
      });
      currentY += 10;

      // Generated Date: italic
      pdf.setFont("helvetica", "italic");
      pdf.setFontSize(10);
      pdf.text(
        `Generated on: ${new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}`,
        105,
        currentY,
        { align: "center" }
      );
      currentY += 10; // Less space before the next section

      // User Inputs Section: bold and underline
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14); // Same font size for both titles
      currentY = checkAndAddPageIfNeeded(currentY, pdf);
      pdf.text("User Inputs", 10, currentY);
      pdf.line(
        10,
        currentY + 1,
        10 +
          (pdf.getStringUnitWidth("User Inputs") * pdf.internal.getFontSize()) /
            pdf.internal.scaleFactor,
        currentY + 1
      ); // Match underline with title length
      currentY += 10;

      // User Inputs: bold labels, normal values with reduced space
      pdf.setFontSize(10);
      inputs.forEach((input) => {
        currentY = checkAndAddPageIfNeeded(currentY, pdf);
        const labelText = `${input.id}: `;
        pdf.setFont("helvetica", "bold"); // Label in bold
        pdf.text(labelText, 10, currentY); // Position label

        // Calculate width of the label text to adjust the starting position of the value
        const labelWidth =
          (pdf.getStringUnitWidth(labelText) * pdf.internal.getFontSize()) /
          pdf.internal.scaleFactor;
        pdf.setFont("helvetica", "normal"); // Switch to normal font for value

        // Position value closer to label
        pdf.text(input.value, 10 + labelWidth + 5, currentY); // Increased space after ":"

        currentY += 10; // Increment Y position for the next input
      });

      // Analysis Results Section: bold and underline, same styling as User Inputs
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(14); // Same font size for both titles
      currentY = checkAndAddPageIfNeeded(currentY, pdf);
      pdf.text("Analysis Results", 10, currentY);
      pdf.line(
        10,
        currentY + 1,
        10 +
          (pdf.getStringUnitWidth("Analysis Results") *
            pdf.internal.getFontSize()) /
            pdf.internal.scaleFactor,
        currentY + 1
      ); // Match underline with title length
      currentY += 10;

      // Analysis Results: bold load cases, color-coded
      pdf.setFontSize(10);
      Object.entries(data).forEach(([caseName, caseResults]) => {
        currentY = checkAndAddPageIfNeeded(currentY, pdf);
        pdf.setFont("helvetica", "bold"); // Bold for case name
        pdf.text(caseName + ":", 10, currentY);
        currentY += 10;

        Object.entries(caseResults).forEach(([component, result]) => {
          currentY = checkAndAddPageIfNeeded(currentY, pdf);
          pdf.setFont("helvetica", "bold"); // Bold for component
          pdf.setTextColor("#808080"); // Dark grey for component
          pdf.text(`${component}: `, 10, currentY);

          // Color only the result text
          pdf.setFont("helvetica", "normal"); // Normal for the result
          pdf.setTextColor(result === "SAFE" ? "green" : "red");
          // Adjust the position for result, accounting for the additional space after ":"
          const resultPosition =
            10 +
            (pdf.getStringUnitWidth(`${component}: `) *
              pdf.internal.getFontSize()) /
              pdf.internal.scaleFactor +
            3; // Slight space after ":"
          pdf.text(result, resultPosition, currentY);

          currentY += 10;
        });
        pdf.setTextColor(0); // Reset text color to black for next texts
      });

      // Save the PDF
      pdf.save("detailed_report.pdf");
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <>
      <Navbar />
      <MainContainer>
        <VideoBackground autoPlay loop muted>
          <source src="/videos/windturbine.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>{" "}
        <Title>Simple Load Model</Title>
        <Container isPhoneView={isPhoneView} ref={inputRef}>
          <InputGroup>
            <Label htmlFor="refWindSpeed">Reference Wind Speed</Label>
            <InputContainer>
              <NumberInput id="refWindSpeed" placeholder="Measured in m/s" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The baseline wind speed used to compare or reference
                  performance.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="avgWindSpeed">Average Wind Speed</Label>
            <InputContainer>
              <NumberInput id="avgWindSpeed" placeholder="Measured in m/s" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The mean wind speed over a specified period of time.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="numBlades">Number of Blades</Label>
            <InputContainer>
              <NumberInput id="numBlades" placeholder="Typically 3" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  Number of blades on the wind turbine. More blades can increase
                  torque but may reduce speed.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="bladeRadius">Blade Tip Radius</Label>
            <InputContainer>
              <NumberInput id="bladeRadius" placeholder="Measured in meters" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  Distance from the center of the rotor to the tip of the blade.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="platformArea">
              Total Platform Area of the Blade
            </Label>
            <InputContainer>
              <NumberInput
                id="platformArea"
                placeholder="Measured in square meters"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The entire area of the rotor that interacts with the wind.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="rotorSpeed">Maximum Rotor Speed</Label>
            <InputContainer>
              <NumberInput id="rotorSpeed" placeholder="Measured in RPM" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The maximum revolutions per minute of the rotor under optimal
                  conditions.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="dragCoeff">Drag Coefficient of the Blades</Label>
            <InputContainer>
              <NumberInput id="dragCoeff" placeholder="Unitless" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  A dimensionless number that quantifies the drag or resistance
                  of an object in a fluid environment.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="maxLiftCoeff">
              Maximum Lift Coefficient of the Blades
            </Label>
            <InputContainer>
              <NumberInput id="maxLiftCoeff" placeholder="Unitless" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The maximum lift coefficient achievable by the blades,
                  relating to the lift produced at different angles of attack.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="thrustCoeff">Thrust Coefficient</Label>
            <InputContainer>
              <NumberInput id="thrustCoeff" placeholder="Unitless" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  Coefficient representing the thrust force produced by the
                  rotor blades as a ratio of the wind force.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="designRotorSpeed">Design Rotor Speed</Label>
            <InputContainer>
              <NumberInput
                id="designRotorSpeed"
                placeholder="Measured in RPM"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The intended operational revolutions per minute of the rotor
                  for which the turbine is designed.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="gearboxRatio">Gear Box Ratio</Label>
            <InputContainer>
              <NumberInput
                id="gearboxRatio"
                placeholder="Enter ratio, e.g., '50:1'"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The ratio of the gear box which determines the relationship
                  between the speed of the wind turbine's rotor and the
                  generator.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="brakeStatus">Brake Status</Label>
            <InputContainer>
              <Input
                id="brakeStatus"
                type="text"
                placeholder="Enter 'Y' for Yes or 'N' for No"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  Indicates whether the brake is engaged when the gearbox is in
                  high speed.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="brakeTorque">Brake Torque</Label>
            <InputContainer>
              <NumberInput id="brakeTorque" placeholder="Enter value in N·m" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The torque applied by the brake to slow down or hold the rotor
                  stationary.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="singleBladeMass">Single Blade Mass</Label>
            <InputContainer>
              <NumberInput id="singleBladeMass" placeholder="Measured in kg" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  Mass of a single blade of the wind turbine.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="rotorMass">Rotor Mass (All Blades and Hub)</Label>
            <InputContainer>
              <NumberInput id="rotorMass" placeholder="Measured in kg" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  Combined mass of all the blades and the hub.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="airDensity">Air Density</Label>
            <InputContainer>
              <NumberInput id="airDensity" placeholder="Measured in kg/m³" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The density of the air, which affects the wind turbine's
                  performance.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="gravitationalAcceleration">
              Gravitational Acceleration
            </Label>
            <InputContainer>
              <NumberInput
                id="gravitationalAcceleration"
                placeholder="Measured in m/s²"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The acceleration due to Earth's gravity, used in various
                  calculations for turbine design.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="designPower">Design Power</Label>
            <InputContainer>
              <NumberInput id="designPower" placeholder="Measured in kW" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The power output the wind turbine is designed to achieve at
                  the nominal wind speed.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="shortCircuit">Short Circuit Torque Factor</Label>
            <InputContainer>
              <NumberInput id="shortCircuit" placeholder="Factor value" />
              <Tooltip>
                <Icon />
                <TooltipText>
                  A factor used in the calculation of the electromagnetic torque
                  during a short circuit event.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="stationaryBlades">
              Blades Stationary During Parking
            </Label>
            <InputContainer>
              <Input
                id="stationaryBlades"
                type="text"
                placeholder="Enter 'Y' for Yes or 'N' for No"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  Indicates if the blades are kept stationary when the turbine
                  is not operating (parked).
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="gearboxBrake">
              If Brake is on High Speed of Gearbox
            </Label>
            <InputContainer>
              <Input
                id="gearboxBrake"
                type="text"
                placeholder="Enter 'Y' for Yes or 'N' for No"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  Indicate whether the brake should be applied when the gearbox
                  is at high speed.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="bladeCenterGravity">
              Distance from Blade Center of Gravity to Rotor Axis
            </Label>
            <InputContainer>
              <NumberInput
                id="bladeCenterGravity"
                placeholder="Measured in meters"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The distance from the center of gravity of a blade to the
                  center of the rotor axis.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="rotorCenterFirstBearing">
              Distance Between Rotor Center and First Bearing
            </Label>
            <InputContainer>
              <NumberInput
                id="rotorCenterFirstBearing"
                placeholder="Measured in meters"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The distance from the rotor's center to the first bearing
                  point.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="centerGravityRotorAxis">
              Distance Between Center of Gravity to Rotor Axis
            </Label>
            <InputContainer>
              <NumberInput
                id="centerGravityRotorAxis"
                placeholder="Measured in meters"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The distance between the combined center of gravity of the
                  rotor assembly to the rotor axis.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="rotorCenterYawAxis">
              Distance Between Rotor Center and Yaw Axis
            </Label>
            <InputContainer>
              <NumberInput
                id="rotorCenterYawAxis"
                placeholder="Measured in meters"
              />
              <Tooltip>
                <Icon />
                <TooltipText>
                  The distance from the rotor's center to the yaw axis.
                </TooltipText>
              </Tooltip>
            </InputContainer>
          </InputGroup>
          <GenerateButton onClick={generatePDF}>
            Generate Analysis
          </GenerateButton>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default SimpleLoadModelInput;
