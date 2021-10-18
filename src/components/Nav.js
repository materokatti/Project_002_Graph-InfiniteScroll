import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavContainer>
      <h1>this is a nav</h1>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  height: 70px;
  background-color: #000;
`;

export default Nav;
