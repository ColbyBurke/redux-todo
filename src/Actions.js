export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
// this is an action creator
// it creates action objects
export function addTodo (text) {
    return {type: ADD_TODO, payload: text}
}

export function deleteTodo (index){
    return {type: DELETE_TODO, payload: index}
}

export function toggleTodo(index){
    return {type: TOGGLE_TODO, payload: index}
}

export function setVisibilityFilter(filter){
    return {type: SET_VISIBILITY_FILTER, payload: filter}
}



//dispatch(addTodo(text))