import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters, deleteTodo } from '../Actions'
import ToDoList from '../components/todoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  console.log('The state is: ', state)
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToDoClick: id => {
      // {type: "TOGGLE_TODO", payload: 1}
      dispatch(deleteTodo(id))
    }
  }
}

const VisibleToDoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList)

export default VisibleToDoList