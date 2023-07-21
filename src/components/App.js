// App.js
import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, category: "Work", text: "Complete project report" },
    { id: 2, category: "Home", text: "Buy groceries" },
    { id: 3, category: "Personal", text: "Go for a run" },
    // Add more tasks as needed
  ]);

  const categories = ["All", "Work", "Home", "Personal"];

  const handleTaskFormSubmit = (formData) => {
    // Create a new task object with a unique ID
    const newTask = {
      id: tasks.length + 1,
      category: formData.category,
      text: formData.text,
    };
    // Update the tasks state by adding the new task
    setTasks([...tasks, newTask]);
  };

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory === "All") {
      // If "All" is selected, show all tasks
      setTasks([
        { id: 1, category: "Work", text: "Complete project report" },
        { id: 2, category: "Home", text: "Buy groceries" },
        { id: 3, category: "Personal", text: "Go for a run" },
        // Add more tasks as needed
      ]);
    } else {
      // Filter tasks based on the selected category
      const filteredTasks = tasks.filter((task) => task.category === selectedCategory);
      setTasks(filteredTasks);
    }
  };

  return (
    <div className="app">
      <CategoryFilter categories={categories} onCategoryChange={handleCategoryChange} />
      <TaskList tasks={tasks} />
      <NewTaskForm categories={categories} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}

export default App;
