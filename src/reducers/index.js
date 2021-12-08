import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  movieReducer,
  favoritesReducer
})

// export rootReducer - > movie functions should temp not work
export default rootReducer;
