// Create a reducer file for handling business logic for favorites
// Include the following state values in your initialState setup:
// -  favorites: an array of movie objects
// -  displayFavorites: a boolean that holds if favorite elements should be displayed in app

// create action creators for custom favorites actions
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from './../actions/favoritesActions';

const initialState = {
  // add title to favorites empty array as test [{title: "Movie", id:1}]
  favorites: [],
  displayFavorites: true
}

// create reducer adding only default case to switch
// add in toggle favorites case -> opposite state of display Favorites
const favoritesReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites
      }

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(item => (item.id !== action.payload))
      }
    
    default:
      return(state);
  }
}

export default favoritesReducer;