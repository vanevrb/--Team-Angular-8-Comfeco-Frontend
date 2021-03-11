import { UIState, UIReducer } from './ui.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  loader: UIState;
}

export const appReducers: ActionReducerMap<AppState> = {
  loader: UIReducer,
};
