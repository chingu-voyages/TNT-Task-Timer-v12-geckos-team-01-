/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Bootstrap Imports */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* React Router */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* custom components */
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent";

/* Pages */
import CreateTaskPage from "./pages/CreateTaskPage";
import RunningTasksPage from "./pages/RunningTasksPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <main>
      <Router>
        <Container fluid>
          <Row>
            {/* Bootstrap Column for the sidebar */}
            <Col className="p-0 vh-100" xs={{ span: 12 }} md={{ span: 2 }}>
              <Sidebar />
            </Col>

            {/* Bootstrap Column for the main content */}
            <Col xs={{ span: 12 }} md={{ span: 10 }}>
              <MainContent>
                <Switch>
                  <Route exact path="/" component={CreateTaskPage} />
                  <Route exact path="/reports" component={ReportsPage} />
                  <Route exact path="/mytasks" component={RunningTasksPage} />
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
