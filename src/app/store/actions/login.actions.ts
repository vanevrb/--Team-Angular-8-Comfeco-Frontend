import { createAction, props } from '@ngrx/store';
import { Login } from '../../core/interfaces';

const initLogin = createAction(
  '[Login] Init Login',
  props<{ loginData: Login }>()
);
const successLogin = createAction(
  '[Login] Success Login',
  props<{ token: string }>()
);

const logout = createAction('[Login] Logout');

const completeLogin = createAction('[Login] Complete Login');

const errorLogin = createAction('[Login] Error Login');

export default {
  initLogin,
  successLogin,
  errorLogin,
  completeLogin,
  logout,
};
