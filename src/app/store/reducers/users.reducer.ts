import usersActions from '../actions/users.actions';
import { UsersInfoResponse } from '../../core/interfaces/UsersInfoResponse';
import { createReducer, on } from '@ngrx/store';

export interface UsersState {
  user: Partial<UsersInfoResponse>;
  loaded: boolean;
  loadingUsers: boolean;
  error: any;
}

export const initialState: UsersState = {
  user: null,
  loaded: false,
  loadingUsers: false,
  error: null,
};

const _usersReducer = createReducer(
  initialState,
  on(usersActions.loadUser, (state) => ({ ...state, loadingUsers: true })),
  on(usersActions.unloadUser, (state) => ({ ...state, loadingUsers: true })),
  on(usersActions.loadErrorUser, (state, { payload }) => ({
    ...state,
    loaded: false,
    loadingUsers: false,
    error: payload,
  })),
  on(usersActions.setUser, (state, { user }) => ({
    ...state,
    user: { ...user },
    loaded: true,
    loadingUsers: false,
  })),
  on(usersActions.deleteUser, (state) => ({
    ...state,
    user: null,
    loaded: false,
    loadingUsers: false,
  }))
);

export function usersReducer(state, action) {
  return _usersReducer(state, action);
}
