import { createAction, props } from '@ngrx/store';
import { UsersInfoResponse } from '../../core/interfaces/UsersInfoResponse';
import { EditUsers } from '../../core/models/EditUsers';

const loadUser = createAction('[Users] Load User');
const unloadUser = createAction('[Users] Unload User');
const loadErrorUser = createAction(
  '[Users] Load Error User',
  props<{ payload: any }>()
);

const setUser = createAction(
  '[Users] Set User',
  props<{ user: Partial<UsersInfoResponse> }>()
);
const deleteUser = createAction('[Users] Delete User');

const changeImage = createAction(
  '[Users] Image User',
  props<{ image: string }>()
);
const editUser = createAction(
  '[Users] Edit User',
  props<{ newUser: Partial<EditUsers> }>()
);

const editError = createAction('[Users] Edit Error User');

export default {
  loadUser,
  loadErrorUser,
  setUser,
  deleteUser,
  unloadUser,
  changeImage,
  editUser,
  editError,
};
