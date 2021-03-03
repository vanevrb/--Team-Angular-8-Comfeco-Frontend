import { Injectable } from '@angular/core';
import * as localForage from 'localforage';

@Injectable({
  providedIn: 'root',
})
export class SaveLocalService {
  setItem(key: string, item: any) {
    return localForage
      .setItem(key, item)
      .then((val) => val)
      .catch((err) => err);
  }

  getItem(key: string) {
    return localForage
      .getItem(key)
      .then((val) => val)
      .catch((err) => err);
  }

  // getItem(key: string): Observable<string> {
  //   return from(localForage.getItem(key));
  // }

  removeItem(key: string) {
    return localForage
      .removeItem(key)
      .then((val) => val)
      .catch((err) => err);
  }
}
