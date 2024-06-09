import styled from "styled-components";

import DigitalClock from "./components/DigitalClock";
import AnalogClock from "./components/AnalogClock";

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
      <AnalogClock />
      <DigitalClock />
    </AppContainer>
  )
}

export default App
