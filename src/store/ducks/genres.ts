import {Reducer} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {RootState} from './state';
import createReducer from '../../util/CreateReducer';
import api from '../../services/api';

export enum GenreTypes {
  ListGenreStart = '@movies/ListGenreStart',
  ListGenreSuccess = '@movies/ListGenreSuccess',
  ListGenreFailure = '@movies/ListGenreFailure',
}

export type GenreType = {
  id: number;
  name: string;
};

export type Actions = {
  ListGenreStart: {type: GenreTypes.ListGenreStart};
  ListGenreSuccess: {
    type: GenreTypes.ListGenreSuccess;
    payload: any;
  };
  ListGenreFailure: {
    type: GenreTypes.ListGenreFailure;
    payload: any;
  };
};

export interface LoadingSection {
  'loading.list': boolean;
  'loading.get': boolean;
}

export interface GenreState {
  data: {
    genres: GenreType[];
  };

  loading: LoadingSection;
  error: any;
}

export const InitialState: GenreState = {
  data: {
    genres: [],
  },
  loading: {
    'loading.list': false,
    'loading.get': false,
  },
  error: undefined,
};

export const genreReducer: Reducer<GenreState> = createReducer(InitialState, {
  [GenreTypes.ListGenreStart](state: GenreState) {
    state.loading['loading.get'] = true;
    return state;
  },
  [GenreTypes.ListGenreSuccess](
    state: GenreState,
    action: Actions['ListGenreSuccess'],
  ) {
    state.loading['loading.get'] = false;
    state.data.genres = action.payload;
    return state;
  },
  [GenreTypes.ListGenreFailure](
    state: GenreState,
    action: Actions['ListGenreFailure'],
  ) {
    state.loading['loading.get'] = false;
    state.data.genres = [];
    state.error = action.payload;
    return state;
  },
});

export function ListGenre(): ThunkAction<Promise<any>, RootState, any, any> {
  return async (dispatch): Promise<any> => {
    dispatch({
      type: GenreTypes.ListGenreStart,
    } as Actions['ListGenreStart']);

    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=f2c194f4ffb324bf3db1dc06a13d0d32&language=pt-br`;

    return new Promise((resolve, reject) => {
      api
        .get(url)
        .then((response: any) => {
          dispatch({
            type: GenreTypes.ListGenreSuccess,
            payload: response.data,
          } as Actions['ListGenreSuccess']);
          resolve(response);
        })
        .catch((err: any) => {
          dispatch({
            type: GenreTypes.ListGenreFailure,
            payload: err.response.data,
          } as Actions['ListGenreFailure']);
          reject();
        });
    });
  };
}
