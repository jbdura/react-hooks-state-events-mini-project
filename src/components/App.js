import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [seletedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  function addNewTask(newTask){
    const newTaskList = [...tasks, newTask]
    setTasks(newTaskList)
  }

  function deleteTask(deletedTaskText){
    const newTaskList = tasks.filter(task=>task.text!==deletedTaskText)
    setTasks(newTaskList)
  }

  const filteredTaskList = tasks.filter(task=>{
    if(seletedCategory==="All") return true;
    return task.category === seletedCategory
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={seletedCategory} onSelectCategory={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES.slice(1)} onTaskFormSubmit={addNewTask}/>
      <TaskList tasks={filteredTaskList} onDeleteTask={deleteTask}/>
    </div>
  );
}

export default App;