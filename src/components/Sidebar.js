import React from "react";
import PropTypes from "prop-types";

const Sidebar = props => {
  const { children } = props;
  return (
    <div>
      <h1 className="text-white">Sidebar</h1>
      {children}
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.any.isRequired
};

export default Sidebar;
