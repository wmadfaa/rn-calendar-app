import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import { AuthState, AuthActionTypes } from './auth.types';
import * as actions from './auth.actions';

export const initialState: AuthState = {
  authenticated: false,
};

const reducer: Reducer<AuthState, ActionType<typeof actions>> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_IS_AUTHENTICATED:
      return { ...state, authenticated: action.payload.value };
    default:
      return state;
  }
};

export { reducer as AuthReducer };
