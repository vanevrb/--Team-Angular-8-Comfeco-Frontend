import { ActionReducerMap } from '@ngrx/store';
import { uiState, uiReducer } from './ui.reducer';
import { UsersState, usersReducer } from './users.reducer';
import { LoginState, loginReducer } from './login.reducer';
import { imageState, imageReducer } from './image.reducers';

export interface AppState {
  loader: uiState;
  login: LoginState;
  image: imageState;
}
export interface AppStateWithUsers extends AppState {
  user: UsersState;
}

export const appReducers: ActionReducerMap<AppState> = {
  loader: uiReducer,
  login: loginReducer,
  image: imageReducer,
};

export { usersReducer, loginReducer, imageReducer };
