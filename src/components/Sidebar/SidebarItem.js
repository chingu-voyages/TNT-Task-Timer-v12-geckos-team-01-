/* eslint-disable no-shadow */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeTab } from "../../actions/uiActions";

const SidebarItem = ({
  tabNumber,
  to,
  iconName,
  linkText,
  selected,
  changeTab
}) => {
  const tabClicked = () => {
    changeTab(tabNumber);
  };
  return (
    <li className="sidebar-list-item">
      <Link to={to} className="text-white" onClick={tabClicked}>
        <div
          className={`sidebar-link-container ${
            selected ? "selected-sidebar-item" : ""
          }`}
        >
          <i className="material-icons sidebar-icon ">{iconName}</i>
          <span className="sidebar-link-text">{linkText}</span>
        </div>
      </Link>
    </li>
  );
};

SidebarItem.propTypes = {
  tabNumber: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  changeTab: PropTypes.func.isRequired
};

SidebarItem.defaultProps = {
  selected: false
};

export default connect(
  null,
  { changeTab }
)(SidebarItem);
