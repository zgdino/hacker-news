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
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        // every time something is typed in a search bar change the page to 0, because if we are currently on page number 6 and start searching for a new term, we would like to start from page 0
        page: 0,
      }
    // if none of the actions passed match
    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
}
export default reducer
