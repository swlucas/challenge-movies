import {createStore, applyMiddleware, compose} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {rootReducer} from './ducks';

const persistConfig = {
  key: 'movie-challenge',
  storage: storage,
  whitelist: ['movies'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);
export {store, persistor};
