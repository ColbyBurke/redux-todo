import React from 'react'
import DeleteLink from '../Containers/DeleteLink'

const ToDo = ({ completed, text, onClick, onDeleteClick }) => {
  console.log({onDeleteClick});
  
  return (
  <table>
    <tbody>
          <tr>
      <td
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {text}
      </td>
      <td>
        <DeleteLink onClick={onDeleteClick}>Delete</DeleteLink>
      </td>
    </tr>
    </tbody>

  </table>
  )
}



export default ToDo
