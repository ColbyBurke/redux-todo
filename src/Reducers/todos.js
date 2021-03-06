import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../Actions'

function todos(
  state = [
    { text: 'Feed the cat', completed: false },
    { text: 'Make bed', completed: false }
  ],
  action
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload, completed: false }]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    case DELETE_TODO:
      return state.filter((todo, index) => {
        if(index !== action.payload){
          return todo
        }
      })
    default:
      return state
  }
}

export default todos