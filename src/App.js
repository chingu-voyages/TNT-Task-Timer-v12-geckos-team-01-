import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* Bootstrap Imports */
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

/* custom components */
import Sidebar from "./components/Sidebar";

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const clickHandler = () => {
    setIsAlertVisible(!isAlertVisible);
  };

  return (
    <main>
      <Container fluid={true}>
        <Row>
          <Col
            className="vh-100 bg-primary"
            xs={{ span: 12, order: 2 }}
            md={{ span: 2, order: 1 }}
          >
            <h1 className="text-white">Sidebar</h1>
          </Col>

          <Col xs={{ span: 12, order: 1 }} md={{ span: 10, order: 2 }}>
            <h1>Create A Task</h1>
            <Button onClick={clickHandler}>Click Me!</Button>

            <Alert show={isAlertVisible} variant="success">
              <Alert.Heading>You clicked the button!</Alert.Heading>
              <p>Click the button to close this alert.</p>
              <Button onClick={clickHandler}>Close</Button>
            </Alert>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
