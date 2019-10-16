import React from "react";
import PropTypes from "prop-types";
import SidebarItem from "./SidebarItem";

const Sidebar = props => {
  const { children } = props;

  // The links that should appear in the sidebar.
  // to: the link used by React Router
  // iconName: Google material Icon name (https://material.io/resources/icons/?style=baseline)
  // linkText: The text that will be displayed for the link.
  const sidebarData = [
    { to: "/", iconName: "create", linkText: "Create A Task" },
    { to: "/viewtasks", iconName: "event_note", linkText: "View All Tasks" },
    { to: "/taskalerts", iconName: "alarm", linkText: "Alerts" },
    { to: "/reports", iconName: "timeline", linkText: "Reports" },
    { to: "/settings", iconName: "settings_applications", linkText: "Settings" }
  ];

  const sidebarItems = sidebarData.map(sidebarItem => (
    <SidebarItem
      to={sidebarItem.to}
      iconName={sidebarItem.iconName}
      linkText={sidebarItem.linkText}
    />
  ));

  return (
    <div className="sidebar">
      <h1 className="time-tracker-logo">Time Tracker</h1>
      <ul className="sidebar-list">{sidebarItems}</ul>

      <div className="sidebar-extra">{children}</div>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.any.isRequired
};

export default Sidebar;
