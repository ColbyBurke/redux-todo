import React from 'react'
import ToDo from './Todo'

const ToDoList = ({ todos, onToDoClick }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDo key={index} {...todo} onClick={() => onToDoClick(index)} />
      ))}
    </ul>
  )
}

export default ToDoList