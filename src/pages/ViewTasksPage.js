import React from "react";
import TaskList from "../components/TaskList";

const ViewTasksPage = () => {
  return (
    <div>
      <h1>Viewing Tasks</h1>
      <TaskList />
    </div>
  );
};
/* make sure to add PropTypes if any */

export default ViewTasksPage;
