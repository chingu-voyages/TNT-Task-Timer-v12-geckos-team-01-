import React from "react";
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
// import NewTask from "./components/NewTask";
// import TaskList from "./components/TaskList";

import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent";
import TimerDisplay from "./components/TimerDisplay";

/* Pages */
import CreateTaskPage from "./pages/CreateTaskPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import TaskAlertsPage from "./pages/TaskAlertsPage";
import ViewTasksPage from "./pages/ViewTasksPage";

function App() {
  const timerDone = () => console.log("Timer Done");

  return (
    <main>
      <Router>
        <Container fluid>
          <Row>
            {/* Bootstrap Column for the sidebar */}
            <Col
              className="p-0 vh-100 bg-primary"
              xs={{ span: 12 }}
              md={{ span: 2 }}
            >
              <Sidebar />
            </Col>

            {/* Bootstrap Column for the main content */}
            <Col xs={{ span: 12 }} md={{ span: 10 }}>
              <MainContent>
                <Switch>
                  <Route exact path="/" component={CreateTaskPage} />
                  <Route exact path="/reports" component={ReportsPage} />
                  <Route exact path="/settings" component={SettingsPage} />
                  <Route exact path="/taskalerts" component={TaskAlertsPage} />
                  <Route exact path="/viewtasks" component={ViewTasksPage} />
                </Switch>
                <TimerDisplay text="Test Timer" doneCallback={timerDone} />
              </MainContent>
            </Col>
          </Row>
        </Container>
      </Router>
    </main>
  );
}

export default App;
