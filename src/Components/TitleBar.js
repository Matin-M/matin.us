import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const StyledTitleBar = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flow;
  flex-direction: row;
  font-size: calc(20px + 2vmin);
  color: white;
  padding: 1.5em;
`;

function TitleBar(props) {
  return (
    <StyledTitleBar>
      <Navbar>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>{props.title}</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledTitleBar>
  );
}

export default TitleBar;
