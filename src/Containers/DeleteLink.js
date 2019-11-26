import React from 'react'

export default function DeleteLink({ onClick }) {
    // console.log({onClick});
    
  return (
    <button
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      Delete
    </button>
  )
}
