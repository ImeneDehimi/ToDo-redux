import { useDispatch } from "react-redux";
import { addTask } from "./redux/slices/todo";
import { useState } from "react";
import "./App.css"
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from "react-router-dom";

const App = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState("")
  const [description, setDescription] = useState("")
const handleSubmit=(event)=>{
  event.preventDefault()
  const newTask = {
    id: uuidv4(),
    inputValue,
    description,
    status: "to do",
  };
  dispatch(addTask(newTask));
  navigate("/list");
  setInputValue("")
}
const [button, setButton] = useState(true)
  return (
    <div>
      <div className="container1">
        <div className="btns">
       <button className="btn"><Link to="/">Add ToDo</Link></button>
       <button className="btn2">
        <Link to="/list"> Task list</Link>
      </button>
      </div>
       <form onSubmit={handleSubmit} >
       <input
        type="text" 
        placeholder="Add a new todo"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        required
         />
      <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
      ></textarea>        
        <button type="submit">Add</button>
       </form>
       
     </div>
    </div>
  );
};

export default App;