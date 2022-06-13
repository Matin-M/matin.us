import React from "react";
import styled from "styled-components";
import "./Components/TitleBar";
import TitleBar from "./Components/TitleBar";

const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: white;
`;

function App() {
  return (
    <StyledApp>
      <div>
        <TitleBar title="matin.us"></TitleBar>
      </div>
    </StyledApp>
  );
}

export default App;
