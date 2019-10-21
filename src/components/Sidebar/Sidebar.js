import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SidebarItem from "./SidebarItem";

const Sidebar = ({ currentTab }) => {
  console.log(currentTab);
  // The links that should appear in the sidebar.
  // to: the link used by React Router
  // iconName: Google material Icon name (https://material.io/resources/icons/?style=baseline)
  // linkText: The text that will be displayed for the link.
  const sidebarData = [
    { to: "/", iconName: "create", linkText: "Create A Task" },
    { to: "/mytasks", iconName: "event_note", linkText: "My Tasks" },
    { to: "/reports", iconName: "timeline", linkText: "Reports" }
  ];

  const sidebarItems = sidebarData.map((sidebarItem, index) => (
    <SidebarItem
      tabNumber={index}
      key={sidebarItem.linkText}
      to={sidebarItem.to}
      iconName={sidebarItem.iconName}
      linkText={sidebarItem.linkText}
      selected={currentTab === index}
    />
  ));

  return (
    <div className="sidebar">
      <h1 className="time-tracker-logo">Time Tracker</h1>
      <ul className="sidebar-list">{sidebarItems}</ul>
    </div>
  );
};

Sidebar.propTypes = {
  currentTab: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  currentTab: state.ui.currentTab
});

export default connect(mapStateToProps)(Sidebar);
