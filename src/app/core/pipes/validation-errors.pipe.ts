import { Pipe, PipeTransform } from '@angular/core';

interface LengthError {
  [key: string]: number | null;
}

interface ErrorMessage {
  [key: string]: boolean | null | LengthError;
}

@Pipe({
  name: 'validationErrors',
})
export class ValidationErrorsPipe implements PipeTransform {
  transform(value: ErrorMessage): string {
    if (value.required) {
      return 'Este campo es requerido';
    }
    if (value.pattern) {
      return 'Verifique el email: <ejemplo@email.com>';
    }
    if (value.noConfirmPass) {
      return 'Por favor asegurese de que las contraseñas son iguales';
    }
    if (value.minlength) {
      return `Se necesitan por lo menos ${value.minlength['requiredLength']} carácteres`;
    }
    if (value.notAvailable) {
      return `El usuario ya esta activo, sino recuerda la contraseña dirijase a la sección de olvide contraseña`;
    }
    return null;
  }
}
