import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';

function App() {

  const [todoTitle, setTodoTitle] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const AddTodo = () => {
    const Todo = {
      id: Date.now(),
      title: todoTitle
    }
    setTodoTitle("")
    dispatch({type: 'ADD_TODO', payload: Todo})
  }

  const RemoveTodo = (id) => {
    dispatch({type: 'REMOVE_TODO', payload: {id: id}})
  }

  const ChangeHandler = (e) => {
    setTodoTitle(e.target.value);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input type="text" onChange={ChangeHandler} value={todoTitle}/>
          <button onClick={AddTodo}>Добавить</button>
        </div>
        <div>
          {
            todos.map(item => {
              return <li key={item.id}>{item.title} <button onClick={() => RemoveTodo(item.id)}>x</button></li>
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
