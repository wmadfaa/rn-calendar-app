import React, { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../configureStore';
import Navigators from '../routes';

import NavigationService from '../services/navigationService';
import { NavigationContainerComponent } from 'react-navigation';

const App: React.FC = () => {
  const navigatorRef = useRef<NavigationContainerComponent>(null);
  const { store, persistor } = configureStore();

  useEffect(() => {
    if (navigatorRef.current) {
      NavigationService.navigatorRef = navigatorRef.current;
    }
  }, [navigatorRef]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Navigators ref={navigatorRef} />
      </PersistGate>
    </Provider>
  );
};

export default App;
