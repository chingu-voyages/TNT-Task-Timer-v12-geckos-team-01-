/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Bootstrap Imports */
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* React Router */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* custom components */
import MainContent from "./components/MainContent";
import TimeTrackerNavbar from "./components/TimeTrackerNavbar";

/* Pages */
import CreateTaskPage from "./pages/CreateTaskPage";
import RunningTasksPage from "./pages/RunningTasksPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <main>
      <Router>
        <TimeTrackerNavbar />
        <Container fluid>
          <Row>
            {/* Bootstrap Column for the main content */}
            <Col xs={{ span: 12 }}>
              <MainContent>
                <Switch>
                  <Route exact path="/" component={CreateTaskPage} />
                  <Route exact path="/reports" component={ReportsPage} />
                  <Route exact path="/mytasks" component={RunningTasksPage} />
                  <Route exact path="/settings" component={SettingsPage} />
                </Switch>
              </MainContent>
            </Col>
          </Row>
        </Container>
      </Router>
    </main>
  );
}

export default App;
