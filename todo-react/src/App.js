import './App.css';
import { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";

function App() {
const [todos, setTodos] = useState([]); 
const [todoInput, setTodoInput] = useState(''); 


const saveTodo = () => {
  if (todoInput.trim() !== '') { 
    setTodos([...todos, todoInput]); 
    setTodoInput(''); 
  }
};

const deleteTodo = (index) => {
  const updatedTodos = [...todos]; 
  updatedTodos.splice(index, 1); 
  setTodos(updatedTodos);
};

return (
  <div className='block'>
    <input
    className='input'
      type="text"
      value={todoInput}
      onChange={(e) => setTodoInput(e.target.value)}
      placeholder="Here your todo"
    />
    <button onClick={saveTodo} className='save'>Save Todo</button>
    
        <div>
      {todos.map((todo, index) => (
        <div key={index} className='return'>
          <div className='todo'>{todo}</div>
          <button className='but' onClick={() => deleteTodo(index)} ><MdDeleteOutline className='del'/></button>
        </div>
      ))}
    </div>
  </div>
);

}

export default App;
