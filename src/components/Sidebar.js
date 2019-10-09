import React from "react";
import Col from "react-bootstrap/Col";

const Sidebar = props => {
  return (
    <Col xs={{ span: 12, order: 2 }} md={{ span: 2, order: 1 }}>
      <div className="sidebar">{props.children}</div>
    </Col>
  );
};

export default Sidebar;
