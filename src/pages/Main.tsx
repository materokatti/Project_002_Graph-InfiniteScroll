import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

function Main() {
  return (
    <MainList>
      <Link to='/report'>
        <ListElement>레포트</ListElement>
      </Link>
      <Link to='/passengerList'>
        <ListElement>승객목록</ListElement>
      </Link>
    </MainList>
  );
}

const MainList = styled.ul`
  list-style-type: disc;
  padding: 20px 40px;
`;

const ListElement = styled.li`
  padding: 20px 30px 20px 0px;
`;

export default Main;
