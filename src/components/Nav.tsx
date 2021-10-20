import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <Link to='/'>
        <MainTitle>MotionLabs</MainTitle>
      </Link>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  height: 70px;
  background-color: #000;
  display: flex;
  align-items: center;
`;

const MainTitle = styled.h2`
  color: white;
  margin-left: 15px;
`;

export default Nav;
