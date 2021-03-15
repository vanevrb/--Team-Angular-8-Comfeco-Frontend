import { ActionReducerMap } from '@ngrx/store';
import { uiState, uiReducer } from './ui.reducer';
import { UsersState, usersReducer } from './users.reducer';
import { LoginState, loginReducer } from './login.reducer';

export interface AppState {
  loader: uiState;
  login: LoginState;
}
export interface AppStateWithUsers extends AppState {
  user: UsersState;
}

export const appReducers: ActionReducerMap<AppState> = {
  loader: uiReducer,
  login: loginReducer,
};

export { usersReducer, loginReducer };
