import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { imageActions } from '../actions';

export interface imageState {
  imageLoading: boolean;
  url: string;
}

export const imageInitialState: imageState = {
  imageLoading: false,
  url: null,
};

const _imageReducer = createReducer(
  imageInitialState,
  on(imageActions.initLoadImg, (state) => ({ ...state, isLoading: true })),
  on(imageActions.successLoadImg, (state, { url }) => ({
    ...state,
    isLoading: false,
    url,
  })),
  on(imageActions.errorLoadImg, (state) => ({
    ...state,
    isLoading: false,
    url: null,
  }))
);

export function imageReducer(state, action) {
  return _imageReducer(state, action);
}
