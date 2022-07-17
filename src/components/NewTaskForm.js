import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskDetail, setTaskDetail] = useState("")
  const [newTaskCategory, setNewTaskCategory] = useState("Code")

  function handleSubmit(e){
    e.preventDefault()
    const newTask={
      text: taskDetail,
      category: newTaskCategory,
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={e=>setTaskDetail(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={e=>setNewTaskCategory(e.target.value)}>
          {categories.map(category=>{
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;