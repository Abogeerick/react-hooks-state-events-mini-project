// Task.js
import React, { useState } from "react";

function Task({ category, text, onDelete }) {
  // State to manage the visibility of the task
  const [visible, setVisible] = useState(true);

  const handleDeleteClick = () => {
    // Call the onDelete prop to notify the parent component
    // that this task needs to be deleted.
    onDelete();
    // Hide the task from the UI by updating the state
    setVisible(false);
  };

  // Render the task only if it's visible
  return (
    visible && (
      <div className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={handleDeleteClick}>
          X
        </button>
      </div>
    )
  );
}

export default Task;
