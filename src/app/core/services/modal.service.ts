import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _modalIsOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get modalIsOpen$() {
    return this._modalIsOpen$.asObservable();
  }

  openModal() {
    this._modalIsOpen$.next(true);
  }

  closeModal() {
    this._modalIsOpen$.next(false);
  }
}
