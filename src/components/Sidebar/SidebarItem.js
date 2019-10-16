import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarItem = ({ to, iconName, linkText }) => {
  return (
    <li className="sidebar-list-item">
      <Link to={to} className="text-white">
        <div className="sidebar-link-container">
          <i className="material-icons sidebar-icon">{iconName}</i>
          <span className="sidebar-link-text">{linkText}</span>
        </div>
      </Link>
    </li>
  );
};

SidebarItem.propTypes = {
  to: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default SidebarItem;
