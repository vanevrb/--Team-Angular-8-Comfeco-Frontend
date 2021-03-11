import { createAction } from '@ngrx/store';

const activateLoader = createAction('[UI] Activate Loader');
const stopLoader = createAction('[UI] Stop Loader');

export default {
  activateLoader,
  stopLoader,
};
