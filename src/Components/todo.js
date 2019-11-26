import React from 'react'
import DeleteLink from '../Containers/DeleteLink'

const ToDo = ({ completed, text, onClick }) => (
  <table>

      <tr>
        <td
          onClick={onClick}
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
          {text} 
        </td><button onClick={onClick}>Delete</button>
      </tr>

  </table>
)

export default ToDo
