import React from 'react'
import ToDo from './Todo'

const ToDoList = ({ todos, onToDoClick, onDeleteToDo  }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDo key={index} {...todo} onClick={() => onToDoClick(index)} onDeleteClick={() => onDeleteToDo(index)} />
      ))}
    </ul>
  )
}

export default ToDoList