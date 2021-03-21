import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/index';
import { imageActions } from 'src/app/store/actions';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  myWidget: any;

  constructor(private store: Store<AppState>) {
    //@ts-expect-error
    this.myWidget = cloudinary.createUploadWidget(
      {
        cloudName: 'gusram',
        uploadPreset: 'gjed4dha',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          // console.log('Done! Here is the image info: ', result.info);

          // this._urlResult = result.info.url;
          this.store.dispatch(
            imageActions.successLoadImg({ url: result.info.url })
          );
          this.myWidget.close();
        }

        if (error) {
          this.store.dispatch(imageActions.errorLoadImg());
        }
      }
    );
  }
}
