import { action } from 'typesafe-actions';
import { AuthActionTypes } from './auth.types';

export const setIsAuthenticated = (value: boolean) => action(AuthActionTypes.SET_IS_AUTHENTICATED, { value });
