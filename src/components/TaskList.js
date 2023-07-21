// TaskList.js
import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);
  
  // ...

  const handleTaskDelete = (taskId) => {
    // ...
  };

  return (
    <div className="tasks">
      {taskList.map((task) => (
        <Task
          key={task.id}
          category={task.category}
          text={task.text}
          onDelete={() => handleTaskDelete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
