import styled from "styled-components";

import DigitalClock from "./components/DigitalClock";
import AnalogClock from "./components/AnalogClock";
import { TimeProvider } from "./context/TimeContext";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 4rem;
`;

const App = () => {
  return (
    <AppContainer>
      <TimeProvider>
        <AnalogClock />
        <DigitalClock />
      </TimeProvider>
    </AppContainer>
  )
}

export default App
