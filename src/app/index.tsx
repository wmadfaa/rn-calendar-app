import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../configureStore';

const App: React.FC = () => {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {/* */}

        {/* */}
      </PersistGate>
    </Provider>
  );
};

export default App;
