import { uiState, uiReducer } from './ui.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { UsersState, usersReducer } from './users.reducer';

export interface AppState {
  loader: uiState;
}
export interface AppStateWithUsers extends AppState {
  user: UsersState;
}

export const appReducers: ActionReducerMap<AppState> = {
  loader: uiReducer,
};

export { usersReducer };
