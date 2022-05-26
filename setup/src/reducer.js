import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  // using switch instead of if statements
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
      // if none of the actions passed match
    default:
      throw new Error (`no matching "${action.type}" action type`)
  }
}
export default reducer
