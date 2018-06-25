import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidationDirective } from './custom-validation.directive';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomValidationDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
