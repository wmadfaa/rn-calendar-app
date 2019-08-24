export enum AuthActionTypes {
  SET_IS_AUTHENTICATED = '@auth/SET_IS_AUTHENTICATED',
}

export interface AuthState {
  readonly authenticated: boolean;
}
