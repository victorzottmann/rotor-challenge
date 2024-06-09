import styled from "styled-components";

const ClockContainer = styled.div`
  background-color: black;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/*
  -- Pseudocode for clock hands --

  Since there are three hands: hour, minutes, seconds, consider
  adding a Hand template from which the derived hands could inherit styles from.

  So, for example, assuming all the hands are white but differ in size, the Hand template
  could have a background color of white, and since they are all rotated from the centre,
  maybe also add transform properties to the template itself first.

  Also, their position must be absolute because they're relative to the parent container
*/

const Hand = styled.div`
  position: absolute;
  background-color: white;
  height: 50%; // currently 100% in relation to the clock container
  width: 4px;
  left: 50%;
`;

const AnalogClock = () => {
  return (
    <ClockContainer>
      <Hand />
    </ClockContainer>
  );
}

export default AnalogClock;
