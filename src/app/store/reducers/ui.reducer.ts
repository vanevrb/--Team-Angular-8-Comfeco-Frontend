import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { activateLoader, stopLoader } from '../actions';
import { environment } from '../../../environments/environment';

export interface UIState {
  isLoading: boolean;
}

export const initialState: UIState = {
  isLoading: false,
};

const _UIReducer = createReducer(
  initialState,
  on(activateLoader, (state) => ({ ...state, isLoading: true })),
  on(stopLoader, (state) => ({ ...state, isLoading: false }))
);

export function UIReducer(state, action) {
  return _UIReducer(state, action);
}
