import styled from "styled-components";

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
      <h1>Hello World</h1>
    </AppContainer>
  )
}

export default App
