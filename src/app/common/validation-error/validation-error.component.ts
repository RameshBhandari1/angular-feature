import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Component({
  selector: 'feature-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss']
})
export class ValidationErrorComponent implements OnChanges {
  @Input() errors: Record<string, ValidationErrors> | null = {}
  @Input() customErrorMessages: Record<string, string> | null = {}
  errorMessages: Record<string, string> = {
    required: 'This field is required.',
    email: 'Invalid email format.'
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {customErrorMessages} = changes;
    if (customErrorMessages) {
      this.errorMessages = {
        ...this.errorMessages,
        ...customErrorMessages.currentValue
      };
    }
  }
}
