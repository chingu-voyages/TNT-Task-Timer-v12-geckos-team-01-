import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = props => {
  const { children } = props;
  return (
    <div className="sidebar">
      <h1 className="time-tracker-logo">Time Tracker</h1>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/" className="text-white">
            <div className="sidebar-link-container">
              <i className="material-icons sidebar-icon">create</i>
              <span className="sidebar-link-text">Create A Task</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/viewtasks" className="text-white">
            <div className="sidebar-link-container">
              <i className="material-icons sidebar-icon">event_note</i>
              <span className="sidebar-link-text">View All Tasks</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/taskalerts" className="text-white">
            <div className="sidebar-link-container">
              <i className="material-icons sidebar-icon">alarm</i>
              <span className="sidebar-link-text">Alerts</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/reports" className="text-white">
            <div className="sidebar-link-container">
              <i className="material-icons sidebar-icon">timeline</i>
              <span className="sidebar-link-text">Reports</span>
            </div>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings" className="text-white">
            <div className="sidebar-link-container">
              <i className="material-icons sidebar-icon">
                settings_applications
              </i>
              <span className="sidebar-link-text">Settings</span>
            </div>
          </Link>
        </li>
      </ul>

      <div className="sidebar-extra">{children}</div>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.any.isRequired
};

export default Sidebar;
