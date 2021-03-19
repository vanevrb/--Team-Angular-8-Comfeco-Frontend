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
  on(imageActions.initLoadImg, (state) => ({ ...state, imageLoading: true })),
  on(imageActions.updatedImg, (state) => ({ ...state, imageLoading: false })),
  on(imageActions.successLoadImg, (state, { url }) => ({
    ...state,
    imageLoading: false,
    url,
  })),
  on(imageActions.errorLoadImg, (state) => ({
    ...state,
    imageLoading: false,
    url: null,
  }))
);

export function imageReducer(state, action) {
  return _imageReducer(state, action);
}
