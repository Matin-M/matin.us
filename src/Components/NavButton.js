import React from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

function NavButton(props) {
  return (
    <StyledButton>
      <button>{props.label}</button>
    </StyledButton>
  );
}

export default NavButton;
