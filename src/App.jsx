import styled from "styled-components";

import DigitalClock from "./components/DigitalClock";

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
      <DigitalClock />
    </AppContainer>
  )
}

export default App
