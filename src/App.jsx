import React from "react";
import styled from "styled-components";
import RatingCard from "./components/container";

const StyledApp = styled.main`
  height: 100vh;
  background-color: #000;
  display: grid;
  place-items: center;
  padding: 32px;
`;

function App() {
  return (
    <StyledApp>
      <RatingCard />
    </StyledApp>
  );
}

export default App;
