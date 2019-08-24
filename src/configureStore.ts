import { Store, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, Persistor, createTransform } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ApplicationState, RootReducer, rootSaga } from './store';
import AsyncStorage from '@react-native-community/async-storage';

const JSOG = require('jsog');

export const JSOGTransform = createTransform(
  inboundState => JSOG.encode(inboundState),
  outboundState => JSOG.decode(outboundState),
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  transforms: [JSOGTransform],
};

export default function configureStore(): { store: Store<ApplicationState>; persistor: Persistor } {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();

  const persistedReducer = persistReducer(persistConfig, RootReducer);

  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
