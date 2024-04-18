import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, deleteTask, editTask } from "../redux/slices/todo";
import { Link } from "react-router-dom";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");
const [newText, setNewText] = useState("")

  const filteredTasks = filter === "all" ? todos : todos.filter((task) => task.status === filter);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleStatusChange = (taskId, newStatus) => {
    dispatch(changeStatus({ taskId, newStatus }));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  const updateTodoHandler = (id, text) => {
    dispatch(editTask({id, text}));
  };

  
  return (
    <div className="container2">
      <div className="btns">
       <button className="btn2"><Link to="/">Add ToDo</Link></button>
       <button className="btn">
        <Link to="/list">Task List</Link>
      </button>
      </div>
      <div>
        <label htmlFor="filter">Filter by Status:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="to do">To Do</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <div key={task.id} className="task">
          <li >
            
            <div> <b>Title:</b> {task.inputValue}</div>
            <input
              type="text"
              onChange={(e) => setNewText(e.target.value)}
            />
            <div><b>Description:</b> {task.description}</div>
            <div><b>Status:</b> {task.status}</div>
            {task.status === "to do" && (
              <button
                onClick={() => handleStatusChange(task.id, "in progress")}
              >
                Start
              </button>
            )}
            {task.status === "in progress" && (
              <button onClick={() => handleStatusChange(task.id, "done")}>
                Complete
              </button>
            )}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={()=>{updateTodoHandler(task.id, newText)}}>Modify</button>
          </li>
          </div>
        ))}
      </ul>
      

    </div>
  );
};

export default TodoList;
