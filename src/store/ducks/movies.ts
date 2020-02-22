import {Reducer} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from './state';
import createReducer from '../../util/CreateReducer';
import api from '../../services/api';
import {GenreType} from './genres';
import moment from 'moment';

export enum MovieTypes {
  ListMoviesStart = '@movies/ListMoviesStart',
  ListMoviesSuccess = '@movies/ListMoviesSuccess',
  ListMoviesFailure = '@movies/ListMoviesFailure',
  GetMovieStart = '@movies/GetMovieStart',
  GetMovieSuccess = '@movies/GetMovieSuccess',
  GetMovieFailure = '@movies/GetMovieFailure',
}

export type MovieType = {
  popularity: number;
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: Date;
  original_language: string;
  original_title: string;
  genre_ids: [];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
};

// export type SpokenLanguages = {
//   iso_639_1: string;
//   name: string;
// };

export type MovieDetailType = {
  id: number;
  genres: GenreType[];
  poster_path: string;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  runtime: number;
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  release_date: string;
  popularity: number;
  belongs_to_collection: string;
  budget: number;
  homepage: number;
  imdb_id: string;
  revenue: number;
  tagline: string;
  spoken_languages: any;
};

export type Actions = {
  ListMoviesStart: {type: MovieTypes.ListMoviesStart};
  ListMoviesSuccess: {
    type: MovieTypes.ListMoviesSuccess;
    payload: MovieType[];
  };
  ListMoviesFailure: {
    type: MovieTypes.ListMoviesFailure;
    payload: any;
  };
  GetMovieStart: {type: MovieTypes.GetMovieStart};
  GetMovieSuccess: {
    type: MovieTypes.GetMovieSuccess;
    payload: MovieDetailType;
  };
  GetMovieFailure: {
    type: MovieTypes.GetMovieFailure;
    payload: any;
  };
};

export interface LoadingSection {
  'loading.list': boolean;
  'loading.get': boolean;
}

export interface MoviesState {
  data: {
    page: number;
    total_results: number;
    total_pages: number;
    movies: MovieType[];
    detail: MovieDetailType;
  };

  loading: LoadingSection;
  error: any;
}

export const InitialState: MoviesState = {
  data: {
    page: 0,
    total_results: 0,
    total_pages: 0,
    movies: [],
    detail: {} as MovieDetailType,
  },
  loading: {
    'loading.list': false,
    'loading.get': false,
  },
  error: undefined,
};

export const moviesReducer: Reducer<MoviesState> = createReducer(InitialState, {
  [MovieTypes.ListMoviesStart](state: MoviesState) {
    state.loading['loading.list'] = true;
    state.data.movies = [];
    return state;
  },
  [MovieTypes.ListMoviesSuccess](
    state: MoviesState,
    action: Actions['ListMoviesSuccess'],
  ) {
    state.loading['loading.list'] = false;
    state.data.movies = action.payload;
    return state;
  },
  [MovieTypes.ListMoviesFailure](
    state: MoviesState,
    action: Actions['ListMoviesFailure'],
  ) {
    state.loading['loading.list'] = false;
    state.data.movies = [];
    state.error = action.payload;
    return state;
  },
  [MovieTypes.GetMovieStart](state: MoviesState) {
    state.loading['loading.get'] = true;
    state.data.detail = {} as MovieDetailType;
    return state;
  },
  [MovieTypes.GetMovieSuccess](
    state: MoviesState,
    action: Actions['GetMovieSuccess'],
  ) {
    state.loading['loading.get'] = false;
    state.data.detail = action.payload;
    return state;
  },
  [MovieTypes.GetMovieFailure](
    state: MoviesState,
    action: Actions['GetMovieFailure'],
  ) {
    state.loading['loading.get'] = false;
    state.data.detail = {} as MovieDetailType;
    state.error = action.payload;
    return state;
  },
});

export function listMovies(
  query: string,
): ThunkAction<Promise<any>, RootState, any, any> {
  return async (dispatch): Promise<any> => {
    dispatch({
      type: MovieTypes.ListMoviesStart,
    } as Actions['ListMoviesStart']);

    const url = `search/movie?api_key=f2c194f4ffb324bf3db1dc06a13d0d32&language=pt-br&page=1&include_adult=false&query=${query}`;

    return api
      .get(url)
      .then((response: any) => {
        dispatch({
          type: MovieTypes.ListMoviesSuccess,
          payload: response.data.results.map((result: any) => {
            result.release_date = moment(result.release_date).format(
              'DD/MM/YYYY',
            );
            result.poster_path = `https://image.tmdb.org/t/p/original/${result.poster_path}`;
            result.backdrop_path = `https://image.tmdb.org/t/p/original/${result.backdrop_path}`;
            return result;
          }),
        } as Actions['ListMoviesSuccess']);
      })
      .catch((err: any) => {
        dispatch({
          type: MovieTypes.ListMoviesFailure,
          payload: err.response.data,
        } as Actions['ListMoviesFailure']);
      });
  };
}

export function getMovie(
  movie_id: number,
): ThunkAction<Promise<any>, RootState, any, any> {
  return async (dispatch): Promise<any> => {
    dispatch({
      type: MovieTypes.GetMovieStart,
    } as Actions['GetMovieStart']);
    const url = `movie/${movie_id}?api_key=f2c194f4ffb324bf3db1dc06a13d0d32&language=pt-br`;

    return api
      .get(url)
      .then((response: any) => {
        dispatch({
          type: MovieTypes.GetMovieSuccess,
          payload: {
            ...response.data,
            poster_path: `https://image.tmdb.org/t/p/original/${response.data.poster_path}`,
            release_date: moment(response.data.release_date).format(
              'DD/MM/YYYY',
            ),
          },
        } as Actions['GetMovieSuccess']);
      })
      .catch((err: any) => {
        dispatch({
          type: MovieTypes.GetMovieFailure,
          payload: err.response,
        } as Actions['GetMovieFailure']);
      });
  };
}
