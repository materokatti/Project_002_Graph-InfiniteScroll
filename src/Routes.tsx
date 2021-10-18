import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import First from "./pages/First";
import Second from "./pages/Second";

export default function Routes() {
  return (
    <RouterWrapper>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/1' component={First} />
          <Route exact path='/2' component={Second} />
        </Switch>
      </Router>
    </RouterWrapper>
  );
}

const RouterWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  background-color: #fff;
  min-height: 100vh;
  height: 100%;
`;
