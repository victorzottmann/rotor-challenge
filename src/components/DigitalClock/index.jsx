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

  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedTime = `${hour}:${minutes}:${seconds}`;
  
  return (
    <ClockContainer>
      <time>{formattedTime}</time>
    </ClockContainer>
  );
}

export default DigitalClock;
