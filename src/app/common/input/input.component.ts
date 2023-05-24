import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorDirective} from "../directive/control-value-accessor.directive";

type InputType = 'text' | 'number' | 'email' | 'password' | 'date' | 'time' | 'datetime-local' | string;
@Component({
  selector: 'feature-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent<T> extends ControlValueAccessorDirective<T> {
  @Input() inputId: any;
  @Input() label: any;
  @Input() type: InputType = 'text';
  @Input() customErrorMessages: Record<string, string> = {};
}
