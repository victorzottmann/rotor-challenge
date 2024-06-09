import { useEffect, useState } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  background-color: black;
  padding: 0.5rem 1rem;
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`;

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());

      return () => clearInterval(intervalId);
    }, 1000);
  }, []);

  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  const formattedTime = `${hour}:${minutes}:${seconds}`;
  
  return (
    <ClockContainer>
      <time>{formattedTime}</time>
    </ClockContainer>
  );
}

export default DigitalClock;
