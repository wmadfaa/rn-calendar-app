import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../configureStore';
import Navigators from '../routes';

const App: React.FC = () => {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Navigators />
      </PersistGate>
    </Provider>
  );
};

export default App;
