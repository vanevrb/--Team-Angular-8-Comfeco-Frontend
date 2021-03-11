import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { uiActions } from '../actions';

export interface uiState {
  isLoading: boolean;
}

export const uiInitialState: uiState = {
  isLoading: false,
};

const _uiReducer = createReducer(
  uiInitialState,
  on(uiActions.activateLoader, (state) => ({ ...state, isLoading: true })),
  on(uiActions.stopLoader, (state) => ({ ...state, isLoading: false }))
);

export function uiReducer(state, action) {
  return _uiReducer(state, action);
}
