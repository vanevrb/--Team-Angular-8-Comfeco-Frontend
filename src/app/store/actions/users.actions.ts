import { createAction, props } from '@ngrx/store';
import { UsersInfoResponse } from '../../core/interfaces/UsersInfoResponse';

const loadUser = createAction('[Users] Load User');
const loadErrorUser = createAction(
  '[Users] Load Error User',
  props<{ payload: any }>()
);

const setUser = createAction(
  '[Users] Set User',
  props<{ user: Partial<UsersInfoResponse> }>()
);
const deleteUser = createAction('[Users] Delete User');

export default {
  loadUser,
  loadErrorUser,
  setUser,
  deleteUser,
};
