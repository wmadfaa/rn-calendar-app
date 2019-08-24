import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { AuthState, AuthReducer } from './auth';

const RootReducer = combineReducers({
  auth: AuthReducer,
});

function* rootSaga() {
  yield all([]);
}

export interface ApplicationState {
  auth: AuthState;
}

export { RootReducer, rootSaga };
