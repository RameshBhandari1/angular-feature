import {Directive, Inject, Injector, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl, FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControl,
  Validators
} from "@angular/forms";
import {distinctUntilChanged, startWith, Subject, takeUntil, tap} from "rxjs";

@Directive({
  selector: '[featureControlValueAccessor]'
})
export class ControlValueAccessorDirective<T> implements OnInit, ControlValueAccessor {
  control: FormControl | undefined;
  isRequired = false;
  private _isDisabled = false;
  private _destroy$ = new Subject<void>();
  private _onTouched!: () => T;

  constructor(
    @Inject(Injector) private injector: Injector
  ) {
  }

  ngOnInit() {
    this.setFormControl();
    this.isRequired = this.control?.hasValidator(Validators.required) ?? false;
  }

  setFormControl() {
    try {
      const formControl = this.injector?.get(NgControl);
      switch (formControl.constructor) {
        case FormControlName:
          this.control = this.injector.get(FormGroupDirective).getControl(formControl as FormControlName);
          break;
        default:
          this.control = (formControl as FormControlDirective).form as FormControl;
          break;

      }
    } catch (err) {
      this.control = new FormControl();
    }
  }

  registerOnChange(fn: (val: T | null) => T): void {
    this.control?.valueChanges.pipe(
      takeUntil(this._destroy$),
      startWith(this.control?.value),
      distinctUntilChanged(),
      tap((val) => fn(val))
    ).subscribe(() => this.control?.markAsTouched());
  }

  registerOnTouched(fn: () => T): void {
    this._onTouched = fn;
  }

  writeValue(value: T): void {
    this.control ? this.control?.setValue(value) : (this.control = new FormControl(value));
  }

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }

}
