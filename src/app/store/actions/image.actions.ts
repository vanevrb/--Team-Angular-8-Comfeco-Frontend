import { createAction, props } from '@ngrx/store';

const initLoadImg = createAction('[Image] Init Load');
const successLoadImg = createAction(
  '[Image] Success Load',
  props<{ url: string }>()
);
const errorLoadImg = createAction('[Image] Error Load');

export default {
  initLoadImg,
  successLoadImg,
  errorLoadImg,
};
