import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../Actions'

const AddToDo = ({dispatch}) => {
    const [inputText, setInputText] = useState('')

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch(addTodo(inputText))
                setInputText('')
            }}>
                <input 
                value={inputText} 
                onChange={e => setInputText(e.target.value)}
                placeholder="What todo?">
                </input>
                <button disabled={!(inputText.length > 0)} type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}

export default connect()(AddToDo)