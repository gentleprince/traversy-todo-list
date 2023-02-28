import React from "react";
import PropTypes from "prop-types";
import Task from "./task";

const Tasks = ({ tasks, onDelete,onToggle }) => {
  return (
    <React.Fragment>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />;
      })}
    </React.Fragment>
  );
};

Tasks.propType = {
  tasks: PropTypes.object.isRequired
};

export default Tasks;
