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
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }
    case REMOVE_STORY:
      return {
        ...state,
        // return all the stories that are not matching removed story
        hits: state.hits.filter((story) => story.objectID !== action.payload), 
      }
    // if none of the actions passed match
    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
}
export default reducer
