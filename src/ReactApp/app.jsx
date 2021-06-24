import React, { useEffect, useState } from 'react'
import MockApi from '../MockApi'
import PropTypes from 'prop-types';


const api = new MockApi();

const Todo = ({todo}) => (
  <li>
    <i className={todo.icon}/>
    <div>{todo.task}</div>
    <div>{todo.description}</div>
  </li>
)

Todo.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const App = () =>  { 
  const [ todos, setTodos] = useState([])

  useEffect(() => {
    api.getTodos()
    .then(response => response.json())
    .then(initialTodos => {
      setTodos(initialTodos)
    })
  })
  return (
  <ul>
    {todos.map((todo) => <Todo todo={todo}/>)}
  </ul>
)}

export default App;
