import React from "react";
import {PropTypes} from 'prop-types';
import Col from "react-bootstrap/Col";

const Sidebar = ({children}) => {
  return (
    <Col xs={{ span: 12, order: 2 }} md={{ span: 2, order: 1 }}>
      <div className="sidebar">{children}</div>
    </Col>
  );
};

Sidebar.propTypes = {
  children: PropTypes.any.isRequired
};

export default Sidebar;
