import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  sendForm() {
    return Swal.fire({
      icon: 'info',
      title: 'Registro enviado',
      text: 'Por favor espere...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      willOpen: () => Swal.showLoading(),
    });
  }

  closeSwal() {
    return Swal.close();
  }

  successSwal(data: string) {
    return Swal.fire({
      icon: 'success',
      title: '¡Gracias!',
      text: data,
      timer: 3500,
    });
  }
  failSwal(err: string, title: string) {
    return Swal.fire({
      icon: 'error',
      title: 'Ups, algo salío mal',
      text: err,
    });
  }
}
