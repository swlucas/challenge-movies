import {combineReducers} from 'redux';
import {moviesReducer} from 'src/store/ducks/movies';
import {genreReducer} from 'src/store/ducks/genres';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genreReducer,
});
