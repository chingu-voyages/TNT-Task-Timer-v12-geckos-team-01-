import React from "react";
import PropTypes from "prop-types";

const MainContent = props => {
  const { children } = props;

  return <div>{children}</div>;
};

MainContent.propTypes = {
  children: PropTypes.any.isRequired
};

export default MainContent;
