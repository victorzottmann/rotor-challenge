import styled from "styled-components";

import { useTime } from "../../context/TimeContext";

/*
  -- Pseudocode for clock black and white design --

  Similar to the hands, perhaps the white semicircle could be created with a pseudo-element.
  It's probably easier to make it so the pseudo-element sort of fills in from the bottom.

  And again, since the position of ClockContainer is relative, the pseudo-element would be
  absolute.
*/

const ClockContainer = styled.div`
  background-color: black;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Otherwise the gray section would be a rectangle
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 35%;
    width: 100%;
    background-color: #d4d4d4;
  }
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
  transform: rotate(${({ $rotation }) => $rotation });
`;

const HourHand = styled(Hand)`
  // The height (length) of the hand is relative to the parent container
  height: 35%;
  z-index: 1;
  &::before {
    content: "";
    // The visible part of the hand is controlled by the height of the pseudo-element,
    // which is 70% relative to the original height set above.
    height: 65%;
    width: 4px;
    background-color: white;
  }
`;

const MinuteHand = styled(Hand)`
  height: 65%;
  &::before {
    content: "";
    height: 60%;
    width: 3px;
    background-color: white;
  }
`;

const SecondHand = styled(Hand)`
  height: 85%;
  &::before {
    content: "";
    height: 50%;
    width: 2px;
    background-color: white;
  }
`;

const AnalogClock = () => {
  const currentTime = useTime();

  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourAngle = `${(hour / 12) * 360}deg`;
  const minutesAngle = `${(minutes / 60) * 360}deg`;
  const secondsAngle = `${(seconds / 60) * 360}deg`;

  return (
    <ClockContainer>
      <HourHand $rotation={hourAngle} />
      <MinuteHand $rotation={minutesAngle} />
      <SecondHand $rotation={secondsAngle} />
    </ClockContainer>
  );
}

export default AnalogClock;
