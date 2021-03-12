// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: 'https://comfeco-backend.herokuapp.com',
  grant_type: 'password',
  TOKEN_USERNAME: 'comfecoClientId',
  TOKEN_PASSWORD: 'comfeco123',
  LOCAL_KEY_FOR_SAVE: 'C0mf3c0-/key',
  LOCAL_KEY_EMAIL: 'C0mf3c0-/S4v3-3m41l',
  AVATAR: 'https://i.pravatar.cc/150',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
