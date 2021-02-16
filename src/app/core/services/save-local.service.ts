import { Injectable } from '@angular/core';
import * as localForage from 'localforage';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaveLocalService {
  async setItem(key: string, item: any) {
    await localForage.setItem(key, item).catch((err) => {
      console.error(err);
      return;
    });
    return true;
  }

  // getItem(key: string): Observable<string> {
  //   return from(localForage.getItem(key));
  // }

  async removeItem(key: string) {
    await localForage.removeItem(key).catch((err) => {
      console.error(err);
      return;
    });
    return true;
  }
}
