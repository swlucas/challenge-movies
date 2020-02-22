import React from 'react';
import {Provider} from 'react-redux';

import {store, persistor} from 'src/store';
import {PersistGate} from 'redux-persist/integration/react';

import Routes from 'src/routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
