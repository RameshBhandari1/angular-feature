import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import {AppRoutingModule} from "./app-routing.module";
import { InputComponent } from './common/input/input.component';
import { ControlValueAccessorDirective } from './common/directive/control-value-accessor.directive';
import {ReactiveFormsModule} from "@angular/forms";
import { ValidationErrorComponent } from './common/validation-error/validation-error.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    InputComponent,
    ControlValueAccessorDirective,
    ValidationErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
