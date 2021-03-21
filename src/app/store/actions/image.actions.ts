import { createAction, props } from '@ngrx/store';

const initLoadImg = createAction('[Image] Init Load');
const successLoadImg = createAction(
  '[Image] Success Load',
  props<{ url: string }>()
);
const errorLoadImg = createAction('[Image] Error Load');

const updatedImg = createAction('[Image] Updated Load');

export default {
  initLoadImg,
  successLoadImg,
  errorLoadImg,
  updatedImg,
};
