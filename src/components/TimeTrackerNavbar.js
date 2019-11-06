import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const TimeTrackerNavbar = () => {
  return (
    <Navbar variant="dark" bg="primary" expand="lg">
      <Navbar.Brand>Time Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Link to="/" className="no-decoration">
            <Nav.Link href="/">Create A Task</Nav.Link>
          </Link>

          <Link to="/mytasks" className="no-decoration">
            <Nav.Link href="/mytasks">My Tasks</Nav.Link>
          </Link>

          <Link to="/settings">
            <Nav.Link href="/settings">Settings</Nav.Link>
          </Link>

          <Link to="/reports">
            <Nav.Link href="/reports">Reports</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TimeTrackerNavbar;
