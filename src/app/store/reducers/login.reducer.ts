import { createReducer, on } from '@ngrx/store';
import { loginActions } from '../actions';

export interface LoginState {
  logged: boolean;
  loading: boolean;
}

export const loginInitialState: LoginState = {
  logged: false,
  loading: false,
};

const _loginReducer = createReducer(
  loginInitialState,
  on(loginActions.initLogin, (state, { loginData }) => ({
    ...state,
    loading: true,
  })),
  on(loginActions.successLogin, (state, { token }) => ({
    ...state,
    loading: true,
  })),
  on(loginActions.completeLogin, (state) => ({
    ...state,
    loading: false,
    logged: true,
  })),
  on(loginActions.logout, (state) => ({
    ...state,
    logged: false,
    loading: false,
  })),
  on(loginActions.errorLogin, (state) => ({
    ...state,
    logged: false,
    loading: false,
  }))
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}
