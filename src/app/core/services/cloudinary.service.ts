import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  myWidget: any;
  private _urlResult: string;
  private _url$: BehaviorSubject<string> = new BehaviorSubject('');

  get url$() {
    return this._url$.asObservable();
  }

  constructor(private userService: UserService) {
    this._urlResult = undefined;
    //@ts-expect-error
    this.myWidget = cloudinary.createUploadWidget(
      {
        cloudName: 'gusram',
        uploadPreset: 'gjed4dha',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          // console.log('Done! Here is the image info: ', result.info);
          this._urlResult = result.info.url;
          this._url$.next(this._urlResult);
        }
      }
    );
  }

  initUrl() {
    this._urlResult = '';
    this._url$.next(this._urlResult);
  }
}
