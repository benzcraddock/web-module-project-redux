// Create a reducer file for handling business logic for favorites
// Include the following state values in your initialState setup:
// -  favorites: an array of movie objects
// -  displayFavorites: a boolean that holds if favorite elements should be displayed in app
const initialState = {
  // add title to favorites empty array as test [{title: "Movie", id:1}]
  favorites: [],
  displayFavorites: true
}

// create reducer adding only default case to switch
const favoritesReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return(state);
  }
}

export default favoritesReducer;