import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true }]
})
export class MinDateDirective implements Validator {

  @Input() minDate: string;
  constructor() { }


  validate(campoFecha: FormControl): ValidationErrors {
    if (campoFecha.value) {
      const fechaMin = new Date(this.minDate);
      const fechaCampo = new Date(campoFecha.value);
      if (fechaCampo < fechaMin) {
        return { minDate: this.minDate };
      }
    }
  }
}
