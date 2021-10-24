import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Report from "./pages/Report";
import PassengerList from "./pages/PassengerList";

const Routes: React.FC = () => {
  return (
    <RouterWrapper>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/report' component={Report} />
          <Route exact path='/passengerList' component={PassengerList} />
        </Switch>
      </Router>
    </RouterWrapper>
  );
};

const RouterWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
  background-color: #fff;
  min-height: 100vh;
  height: 100%;
`;

export default Routes;
