import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../Actions'

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload
    default:
      return state
  }
}

export default visibilityFilter