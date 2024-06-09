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
  display: flex;
  justify-content: center;
`;

const HourHand = styled(Hand)`
  // The height (length) of the hand is relative to the parent container
  height: 35%;
  z-index: 1;
  /* background-color: red; */
  &::before {
    content: "";
    // The visible part of the hand is controlled by the height of the pseudo-element,
    // which is 70% relative to the original height set above.
    height: 70%;
    width: 5px;
    background-color: white;
  }
`;

const MinuteHand = styled(Hand)`
  height: 65%;
  width: 3px;
  &::before {
    content: "";
    height: 60%;
    width: 3px;
    background-color: white;
  }
`;

const AnalogClock = () => {
  return (
    <ClockContainer>
      <HourHand />
      <MinuteHand />
    </ClockContainer>
  );
}

export default AnalogClock;
