import React, { useEffect } from "react";
import styled from "styled-components";
import { FaQuestionCircle } from "react-icons/fa";
import jsPDF from "jspdf";
import Navbar from "../NavBars/Navbar";
import Footer from "../Footers/Footer";

const Title = styled.h1`
  color: #333;
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 0;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 40px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 32px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 960px;
  margin: 32px auto;
`;

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 2px solid #e6e6e6;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 30px;
  font-size: 0.9rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  flex-grow: 1;

  &:hover {
    border-color: #c0c0c0;
  }

  &:focus {
    outline: none;
    border-color: #6200ea;
    box-shadow: 0 0 0 2px rgba(98, 0, 234, 0.2);
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
`;

const SimpleLoadModelInput = () => {
  const inputRef = React.useRef();

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

      // Use API Response in PDF
      const pdf = new jsPDF();
      inputs.forEach((input, index) => {
        const text = `${input.id}: ${input.value}`;
        pdf.text(text, 10, 10 + index * 10);
      });

      const apiResponseText = `API Result: ${JSON.stringify(data)}`;
      pdf.text(apiResponseText, 10, 10 + inputs.length * 10);

      pdf.save("report.pdf");
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Title>Simple Load Model Input</Title>
      <Container ref={inputRef}>
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
          <Label htmlFor="platformArea">Total Platform Area of the Blade</Label>
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
                A dimensionless number that quantifies the drag or resistance of
                an object in a fluid environment.
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
                The maximum lift coefficient achievable by the blades, relating
                to the lift produced at different angles of attack.
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
                Coefficient representing the thrust force produced by the rotor
                blades as a ratio of the wind force.
              </TooltipText>
            </Tooltip>
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="designRotorSpeed">Design Rotor Speed</Label>
          <InputContainer>
            <NumberInput id="designRotorSpeed" placeholder="Measured in RPM" />
            <Tooltip>
              <Icon />
              <TooltipText>
                The intended operational revolutions per minute of the rotor for
                which the turbine is designed.
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
                between the speed of the wind turbine's rotor and the generator.
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
                The power output the wind turbine is designed to achieve at the
                nominal wind speed.
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
                Indicates if the blades are kept stationary when the turbine is
                not operating (parked).
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
                Indicate whether the brake should be applied when the gearbox is
                at high speed.
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
                The distance from the center of gravity of a blade to the center
                of the rotor axis.
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
                The distance from the rotor's center to the first bearing point.
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
                The distance between the combined center of gravity of the rotor
                assembly to the rotor axis.
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
        <GenerateButton onClick={generatePDF}>Generate Analysis</GenerateButton>
      </Container>
      <Footer />
    </>
  );
};

export default SimpleLoadModelInput;
