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
    if (value.maxlength) {
      return `Máximo ${value.maxlength['requiredLength']} carácteres`;
    }
    if (value.notAvailable) {
      return 'Este identificador ya esta activo.';
    }
    return null;
  }
}
